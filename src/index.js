function handler(event) {
  let clientGeo = event.client.geo

  event.request.headers.set("client-geo-continent", clientGeo.continent)
  event.request.headers.set("client-geo-country", clientGeo.country_code)
  event.request.headers.set("client-geo-latitude", clientGeo.latitude)
  event.request.headers.set("client-geo-longitude", clientGeo.longitude)

  return fetch(event.request, { backend: "origin_0" })
}

addEventListener("fetch", (event) => event.respondWith(handler(event)))