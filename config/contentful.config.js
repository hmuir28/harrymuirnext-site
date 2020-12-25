import getConfig from 'next/config';

const {
  NEXT_CONTENTFUL_SPACE_ID: space,
  NEXT_CONTENTFUL_ACCESS_TOKEN: accessToken,
} = getConfig().publicRuntimeConfig;

export default require('contentful').createClient({
  space,
  accessToken,
});
