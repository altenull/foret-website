import { useEffect, useState } from 'react';
import useSiteMetadataQuery from '../core/useSiteMetadataQuery';
import { NodeEnvEnum } from '../../enums/core/node-env.enum';

export const useGetNpmPackageVersion = (packageName) => {
  const [version, setVersion] = useState(null);

  const { siteMetadata } = useSiteMetadataQuery();

  // CORS issue of npm registry api issue when requesting from localhost.
  // https://stackoverflow.com/questions/58598264/fetching-npm-registry-with-angular-httpclient-causing-cors
  const corsProxy = 'https://cors-anywhere.herokuapp.com/';
  const npmRegistryUrl = `https://registry.npmjs.org/${encodeURIComponent(packageName)}`;

  const requestUrl = `${siteMetadata.nodeEnv === NodeEnvEnum.Development ? corsProxy : ''}${npmRegistryUrl}`;

  useEffect(() => {
    fetch(requestUrl)
      .then((res) => res.json())
      .then((response) => {
        if (response != null) {
          setVersion(response['dist-tags'].latest);
        }
      });
  }, [packageName, requestUrl]);

  return version != null ? `v${version}` : '';
};
