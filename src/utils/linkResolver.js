exports.linkResolver = function linkResolver(doc) {

  if (doc.type === 'home') {
    return '/';
  }
  if (doc.type === 'trip') {
    return `/destination/${doc.uid}`;
  }
  return '/';
}
