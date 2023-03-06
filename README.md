# DaartAds JavaScript library
You can use this library to access the DaartAds APIs.

## Requirements
- [jQuery](https://jquery.com/)

## Installation
----

#### Using CDN
```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/daart-agency/DaartAds-JS@main/css/DaartAds.min.css">


<!-- jQuery (If you don't have one) -->
<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>

<!-- JS -->
<script src="https://cdn.jsdelivr.net/gh/daart-agency/DaartAds-JS@main/js/DaartAds.min.js" daart-token="API_TOKEN"></script>

<!-- Change The value of daart-token="" with your API_TOKEN -->

```

#### Manual Installation:
```html
<!-- CSS -->
<link rel="stylesheet" href="/path/to/css/daart-ads/min">

<!-- jQuery (If you don't have one) -->
<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>

<!-- JS -->
<script src="/path/to/js/daart-ads/min" daart-token="API_TOKEN"></script>

<!-- Change The value of daart-token="" with your API_TOKEN -->

```

- You must initialise the _```daart-token```_ in the script tag, either you choose **CDN** or **manual** use.

## Usage

```html
<!-- Just copy the code below and paste it wherever you imagine you might need to utilise our API. -->

<daart-ads daart-adsize="CHOSEN_SIZE" daart-adsize-mobile="CHOSEN_SIZE_MOBILE"></daart-ads>
```
- From the table you may see below, you should pick a size for _```daart-adsize```_ as well as _```daart-adsize-mobile```_.

## AdSize
| SizeID | Width * Height |
|--------|----------------|
| 0  | Random W*H  |
| 1  | 720 * 480 |
| 2  | 728 * 90  |
| 3  | 480 * 320 |
| 4  | 492 * 328 |
| 5  | 468 * 60  |
| 6  | 360 * 240 |
| 7  | 320 * 100 |
| 8  | 320 * 50  |
| 9  | 300 * 250 |
| 10 | 295 * 98  |
| 11 | 160 * 600 |