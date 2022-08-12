const path = require('path')
const withSass = require('@zeit/next-sass');
module.exports = withSass({
/* bydefault config  option Read For More Optios
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass
*/
cssModules: true
})
module.exports = {
/* Add Your Scss File Folder Path Here */
sassOptions: {
includePaths: [path.join(__dirname, 'styles')],
},
images: {
  domains: ['images.amcnetworks.com', "vignette.wikia.nocookie.net",'s-i.huffpost.com',"media1.popsugar-assets.com","res.cloudinary.com","i.pinimg.com","static.wikia.nocookie.net","m.media-amazon.com" ],
},

}
