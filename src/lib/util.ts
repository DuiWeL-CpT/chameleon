const psl = require('psl');

let findWhitelistRule = (rules: any, host: string, url: string): any => {
  for (var i = 0; i < rules.length; i++) {
    for (var j = 0; j < rules[i].domains.length; j++) {
      if (host.includes(rules[i].domains[j].domain)) {
        if (rules[i].domains[j].re) {
          if (!new RegExp(rules[i].domains[j].pattern).test(url)) {
            return null;
          }
        }

        return {
          id: rules[i].id,
          idx: j,
          profile: rules[i].profile,
        };
      }
    }
  }

  return null;
};

let generateByte = (): number => {
  let octet: number = Math.floor(Math.random() * 256);
  return octet === 10 || octet === 172 || octet === 192 ? generateByte() : octet;
};

let generateIP = (): string => {
  return `${generateByte()}.${generateByte()}.${generateByte()}.${generateByte()}`;
};

let ipInRange = (ip: string, range: string): boolean => {
  if (range.length === 1) {
    return ip === range[0];
  } else {
    let ipToCompare: number = ipToInt(ip);
    let ipRangeFrom: number = ipToInt(range[0]);
    let ipRangeTo: number = ipToInt(range[1]);

    return ipRangeFrom <= ipToCompare && ipToCompare <= ipRangeTo;
  }
};

let ipToInt = (ip: string): number => {
  return (
    ip.split('.').reduce(function(ipInt: number, octet: string) {
      return (ipInt << 8) + parseInt(octet, 10);
    }, 0) >>> 0
  );
};

let ipToString = (ip: number): string => {
  return (ip >>> 24) + '.' + ((ip >> 16) & 255) + '.' + ((ip >> 8) & 255) + '.' + (ip & 255);
};

let isValidIP = (ip: string): boolean => {
  return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    ip
  );
};

let parseURL = (url: string): any => {
  let u = new URL(url);
  let uParsed = psl.parse(u.hostname);

  return {
    base: u.hostname
      .split('.')
      .splice(-2)
      .join('.'),
    domain: uParsed.domain,
    hostname: u.hostname,
    origin: u.origin,
    pathname: u.pathname,
  };
};

let validateIPRange = (from: string, to: string): boolean => {
  return isValidIP(from) && isValidIP(to) && ipToInt(from) <= ipToInt(to);
};

export default {
  findWhitelistRule,
  generateIP,
  ipInRange,
  ipToInt,
  ipToString,
  isValidIP,
  parseURL,
  validateIPRange,
};
