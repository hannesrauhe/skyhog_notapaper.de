/*** taken from http://www.w3schools.com/js/js_cookies.asp */

function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
{
c_start = c_value.indexOf(c_name + "=");
}
if (c_start == -1)
{
c_value = null;
}
else
{
c_start = c_value.indexOf("=", c_start) + 1;
var c_end = c_value.indexOf(";", c_start);
if (c_end == -1)
{
c_end = c_value.length;
}
c_value = unescape(c_value.substring(c_start,c_end));
}
return c_value;
}

function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

/*** own ***/

        var disqus_shortname = 'notapaper'; 

        function enable_comments() {
            setCookie("comments","enabled",5);
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        }