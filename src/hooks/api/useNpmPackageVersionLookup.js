import { useEffect, useState } from 'react';
import { noop } from '../../utils/function.util';

export const useNpmPackageVersionLookup = (packageName) => {
  const [version, setVersion] = useState(null);

  useEffect(() => {
    /**
     * Of the npm registry APIs, only the search API has no CORS issue.
     * https://www.edoardoscibona.com/exploring-the-npm-registry-api#example-4-search-packages-by-text
     */
    const npmSearchUrl = `https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(packageName)}`;

    fetch(npmSearchUrl)
      .then((res) => res.json())
      .then((response) => {
        if (Array.isArray(response?.objects) && response.objects.length > 0) {
          setVersion(`v${response.objects[0].package.version}`);
        }
      })
      .catch(noop);
  }, [packageName]);

  return version;
};
