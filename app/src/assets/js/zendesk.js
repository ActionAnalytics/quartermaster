// window.zE||(function(e,t,s){var n=window.zE=window.zEmbed=function(){n._.push(arguments)}, a=n.s=e.createElement(t),r=e.getElementsByTagName(t)[0];n.set=function(e){ n.set._.push(e)},n._=[],n.set._=[],a.async=true,a.setAttribute("charset","utf-8"), a.src="https://static.zdassets.com/ekr/asset_composer.js?key="+s, n.t=+new Date,a.type="text/javascript",r.parentNode.insertBefore(a,r)})(document,"script","372c5f85-d516-4e3c-b08e-5fb1ec23d472");
//Above code will enable chat window function on main page, which is not required feature for Forester-job-placement. It is a feature that was apart of the originating fork of the repo [https://github.com/bcgov/Family-Protection-Order/blob/master/fpo-web/src/assets/js/zendesk.js] and is not being leveraged.
window.zESettings = {
    webWidget: {
        contactOptions: {
            enabled: true,
            contactButton: { '*': 'Contact Button' },
            chatLabelOnline: { '*': 'Live Chat' },
            chatLabelOffline: { '*': 'Chat is unavailable' },
            contactFormLabel: { '*': 'Leave us a message' }
        }
    }
};
