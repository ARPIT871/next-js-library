export function getDomain(headers) {
    const host = headers.get('host')
    return host 
  }