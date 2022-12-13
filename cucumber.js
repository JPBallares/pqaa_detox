const arguments = [
    '--require-module @babel/register',
    'cucumber/features/*/*.feature'
].join(' ');

module.exports = {
    default: arguments
}