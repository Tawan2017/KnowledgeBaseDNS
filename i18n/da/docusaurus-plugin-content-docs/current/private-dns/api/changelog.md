---
title: Ændringslog
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    Changelog is from here:
    https://api.adguard-dns.io/static/api/CHANGELOG.md
-->

Denne artikel indeholder ændringsloggen for [AdGuard DNS API](private-dns/api/overview.md).

## v1.6

- Added new section "Access settings" for DNS profiles (`access_settings`). By customizing these fields, you’ll be able to protect your AdGuard DNS server from unauthorized access:

  - `allowed_clients` — here you can specify which clients can use your DNS server. This field will have priority over the `blocked_clients` field
  - `blocked_clients` — here you can specify which clients are not allowed to use your DNS server
  - `blocked_domain_rules` — here you can specify which domains are not allowed to access your DNS server, as well as define such domains with wildcard and DNS filtering rules

- Added new limits to Account limits:

  - `access_rules` provides the sum of currently used `blocked_clients` and `blocked_domain_rules` values, as well as the limit on access rules
  - `user_rules` shows the amount of created user rules, as well as the limit on them

- Added new setting: `ip_log_enabled` for the ability to log client IP addresses and domains.

- Added new error code `FIELD_REACHED_LIMIT` to indicate when limits have been reached:

  - For the total number of `blocked_clients` and `blocked_domain_rules` in access settings
  - For `rules` in custom user rules settings

## v1.5

- Tilføjet ny indstilling `block_nrd` samt grupperet alle sikkerhedsrelaterede indstillinger på ét sted.

### Model for safebrowsing-indstillinger ændret

Fra

```json
{
   "enabled": true
}
```

Til:

```json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

hvor `enabled` nu styrer alle indstillinger i gruppen, `block_dangerous_domains` er det tidligere modelfelt "enabled", og `block_nrd` er indstillinger for filtrering af nyregistrerede domæner.

### Model til lagring af serverindstillinger ændret

Fra:

```json
{
  "protection_enabled" : true,
  "safebrowsing_enabled" : true,
  ..
}
```

til:

```json
{
  "protection_enabled" : true,
  "safebrowsing_settings" : {
     "enabled": true,
     "block_dangerous_domains": true,
     "block_nrd": false
  }
  ..
}
```

her bruges det nye felt `safebrowsing_settings` i stedet for det udfasede `safebrowsing_enabled`, hvis værdigemmes i `block_dangerous_domains`.

## v1.4

- Tilføjet mulighed for tilpasset svarblokering: Standard (0.0.0.0), REFUSED, NXDOMAIN eller tilpasset IP-adresse.

## v1.3

- Tilføjet metode til at hente kontokvoter.

## v1.2

- Tilføjet de nye protokoltyper DNS og DNSCRYPT. Udfasning af PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP og DNSCRYPT_UDP, som fjernes helt senere.

## v1.1

- Tilføjet metoder til statistikhentning efter tid, domæner, virksomheder og enheder.
- Tilføjet metode til opdatering af enhedsindstillinger.
- Rettet definition af obligatoriske felter.

## v1.0

- Tilføjet godkendelse.
- CRUD-operationer med enheder og DNS-servere.
- Forespørgselslog.
- Downloader DOT og DOT .mobileconfig.
- Filterlister og webtjenester.
