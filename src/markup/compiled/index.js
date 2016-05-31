var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!DOCTYPE html>\n<html>\n	<head>\n		<meta chaset=\"utf-8\">\n		<meta name=\"vieport\" content=\"width=device-width, initial-scale=1\">\n		<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\">\n	</head>\n	<body>\n		<div class=\"outer-page-wrap\">\n		<header>\n			<nav>\n				<div class=\"logo\">\n					<h1><a href=\"#\">LOGO</a></h1>\n				</div>\n				<ul>\n					<li><a href=\"#\">About</a></li>\n				</ul>\n			</nav>\n			<div class=\"inner-page-wrap\">\n			</div>\n		</header>\n		</div>\n		<script src=\"//localhost:9091\"></script> \n	</body>\n</html>";
},"useData":true});

