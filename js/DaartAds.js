/*! DaartAds 1.0.0
 * ©2022 Alex Javadi, Daart Agency - MIT Licence
 */

/**
 * @summary     DaartAgency.DaaertAds
 * @description Smart Ads jQuery Library by Daart Company
 * @version     1.0.0
 * @author      Alex Javadi
 * @contact     https://daartads.com
 * @copyright   Daart Agency
 *
 * This source file is free software, available under the following license:
 *   MIT license - https://choosealicense.com/licenses/mit/
 *
 * With the hope that it may be helpful, this source file is provided to you WITHOUT ANY WARRANTY, 
 * not even the implied warranties of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 * Details can be found in the licencing files.
 */


class DaartAds {
    #_token;
    #_DAART_API_URL;

    constructor(Token) {
        this.#_token = Token;
        this.#_DAART_API_URL = "https://daartads.com/advertising/apiAdv4.php"
    }

    async GetAds(adSize) {
        var data = [];
        await $.ajax({
            method: "POST",
            url: this.#_DAART_API_URL,
            data: {
                "token" : this.#_token,
                "adsize": adSize
            },
            dataType:"json",
            crossDomain: true,
            statusCode: {
                415: function() {
                    console.error("The Daart Ads API key is invalid, please double check it.")
                }
            }
        }).done((res) => {
            $.each(res['data'], (key,val) => {
                data.push({
                    "AdDetails": val,
                    "Callback": this.constructor.GetAdCallBack(val['Cid'],val['Source'],val['adsize'])
                });
            })
        })

        return Promise.resolve(data);
    }


    static GetAdCallBack(Cid,Source,adSize)
    {
        return `https://daartads.com/CP.php?Cid=${Cid}&Source=${Source}&adsize=${adSize}`;
    }
}

 window.onload = function() {
    if (window.jQuery) {  
        (function($) {
            let token = $("script[daart-token]").attr('daart-token');
            if(typeof token !== undefined && token.length > 0)
            {
                
                if($("daart-ads").length > 0)
                {
                    var api = new DaartAds(token);

                    console.info("Deployment of the Daart Ads library was successful.")

                    $("daart-ads").each(function () {
                        let adsize = $(this).attr('daart-adsize')
                        let cr_logo_white = $(this).attr('daart-logo-white') !== undefined;
                        if(typeof adsize !== undefined && adsize.length > 0)
                        {
                            api.GetAds(adsize).then((res) => {
                                $.each(res, (key,val) => {
                                    $(this).append(`<a class="da-banner" target="_blank" href="${val['Callback']}"><img src="${val['AdDetails']['image']}" alt="Daartads banner"></a><div class="da-copyright"><a href="https://daartads.com?utm_source=daartads&utm_medium=banner&utm_campaign=logo_click" title="Advertising with Daart Ads"><img src="./img/logo/daartads-logo.png" alt="Daartads banner"></a></div>`);
                                })
                            })
                        }
                        else {
                            alert("DaartAds critical problem found\ncheck your browser developer console for more information")
                            console.error("Please verify the tag for one of your daart-ads that lacks a adsize key.")
                        }
                    })
                    
                    
                }
                else
                {
                    console.warn("Daart Ads Library was successfully deployed; however, it was never used. \nTo use it, simply copy and paste the following code wherever you wish to display ads. \n<daart-ads daart-adsize='SIZE_YOU_WANT'></daart-ads>")
                }
            }
            else
            {
                alert("DaartAds critical problem found\ncheck your browser developer console for more information")
                console.error("API key for DaartAds Not Found, make sure your API key is entered in the 'daart-token' attr.")
            }
        })(jQuery);
    } else {
        alert("DaartAds critical problem found\ncheck your browser developer console for more information")
        console.error("DaartAds will be shut down owing to a major error, error -1, necessary plugins not found. \nPlugin Name: jQuery")
    }
}