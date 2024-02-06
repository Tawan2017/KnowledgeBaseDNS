---
title: Seznam změn
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    Changelog is from here:
    https://api.adguard-dns.io/static/api/CHANGELOG.md
-->

Tento článek obsahuje seznam změn pro [AdGuard DNS API](private-dns/api/overview.md).

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

- Přidáno nové nastavení `block_nrd` a seskupení všech nastavení souvisejících se zabezpečením na jednom místě.

### Změněn model pro nastavení bezpečného prohlížení

Z:

```json
{
   "enabled": true
}
```

Na:

```json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

kde `enabled` je nyní ovládání všech nastavení ve skupině, `block_dangerous_domains` je pole předchozího modelu "enabled" a `block_nrd` je nastavení profiltrování nově registrovaných domén.

### Změněn model pro ukládání nastavení serveru

Z:

```json
{
  "protection_enabled" : true,
  "safebrowsing_enabled" : true,
  ..
}
```

na:

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

zde je použito nové pole `safebrowsing_settings` místo zastaralého `safebrowsing_enabled`, jehož hodnotaje uložena v `block_dangerous_domains`.

## v1.4

- Přidána konfigurovatelná možnost blokování odezvy: výchozí (0.0.0.0), REFUSED, NXDOMAIN nebo vlastní IP adresa.

## v1.3

- Přidána metoda pro získání limitů účtu.

## v1.2

- Přidány nové typy protokolů DNS a DNSCrypt. Zastaralé protokoly PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP a DNSCRYPT_UDP budou později odstraněny.

## v1.1

- Přidány metody pro načítání statistik podle času, domén, společností a zařízení.
- Přidána metoda pro aktualizaci nastavení zařízení.
- Opravena definice povinných polí.

## v1.0

- Přidáno ověřování.
- Operace CRUD se zařízeními a DNS servery.
- Protokol dotazů.
- Stahování souborů DoT a DoT .mobileconfig.
- Seznamy filtrů a webové služby.
