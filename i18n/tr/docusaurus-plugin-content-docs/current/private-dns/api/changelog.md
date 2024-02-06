---
title: Changelog
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    Changelog is from here:
    https://api.adguard-dns.io/static/api/CHANGELOG.md
-->

This article contains the changelog for [AdGuard DNS API](private-dns/api/overview.md).

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

- Added new setting `block_nrd` and group all security-related settings to one place.

### Model for safebrowsing settings changed

From

```json
{
   "enabled": true
}
```

To:

```json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

burada "enabled" artık gruptaki tüm ayarları kontrol ediyor, "block_dangerous_domains" önceki model alanı "enabled" ve "block_nrd" yeni kaydedilen alan adlarını filtrelemeye yönelik ayarlar.

### Sunucu ayarlarını kaydetme modeli değiştirildi

From:

```json
{
  "protection_enabled" : true,
  "safebrowsing_enabled" : true,
  ..
}
```

şuna:

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

here new field `safebrowsing_settings` is used instead of deprecated `safebrowsing_enabled`, whose value stored in `block_dangerous_domains`.

## v1.4

- Yanıtın engellenmesi için yapılandırılabilir seçenek eklendi: varsayılan (0.0.0.0), REFUSED, NXDOMAIN veya özel IP adresi.

## v1.3

- Hesap limitlerini almak için yöntem eklendi.

## v1.2

- Yeni protokol türleri DNS ve DNSCrypt eklendi. Daha sonra çıkarılacak olan PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP ve DNSCRYPT_UDP kaldırılacaktır.

## v1.1

- İstatistikleri zamana, alan adlarına, şirketlere ve cihazlara göre almak için yöntemler eklendi.
- Cihaz ayarlarını güncellemek için yöntem eklendi.
- Gerekli alanların tanımı düzeltildi.

## v1.0

- Kimlik doğrulama eklendi.
- Cihazlar ve DNS sunucularıyla CRUD işlemleri.
- Sorgu günlüğü.
- DoT ve DoT .mobileconfig dosyasının indirilmesi.
- Filtre Listeleri ve Web Hizmetleri.
