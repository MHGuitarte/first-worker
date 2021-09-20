addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response(JSON.stringify({"patata": "124"}), {
    headers: { 'content-type': 'application/json' },
  })
}
