exports.linkResolver = function linkResolver(doc) {

  if (doc.type === 'home') {
    return '/';
  }
  if (doc.type === 'trip') {
    return '/trips/' + doc.uid;
  }
  return '/';
}
