const { QuickDB } = require("quick.db");
const db = new QuickDB();
const { MessageEmbed } = require("discord.js")
const { owner , prefix} = require('../../config.json')

module.exports = {
    name: "help",
    description: "help commands all",
    run: async (client, message ) => {

     var _0x239db4=_0x364b;(function(_0x186fec,_0x270d79){var _0x1032a4=_0x364b,_0x1e3f54=_0x186fec();while(!![]){try{var _0x542e78=-parseInt(_0x1032a4(0x131))/0x1*(-parseInt(_0x1032a4(0x113))/0x2)+parseInt(_0x1032a4(0x127))/0x3+-parseInt(_0x1032a4(0x11c))/0x4*(parseInt(_0x1032a4(0x10c))/0x5)+-parseInt(_0x1032a4(0x123))/0x6+-parseInt(_0x1032a4(0x124))/0x7+parseInt(_0x1032a4(0x143))/0x8+parseInt(_0x1032a4(0x126))/0x9*(-parseInt(_0x1032a4(0x145))/0xa);if(_0x542e78===_0x270d79)break;else _0x1e3f54['push'](_0x1e3f54['shift']());}catch(_0x91bb0b){_0x1e3f54['push'](_0x1e3f54['shift']());}}}(_0x5628,0x2d0bf));function _0x5628(){var _0xcafc31=['tag','BLURPLE','join','_users','length','add_','usage:','13BHIbgW','filter','setAuthor','command:\x20`','avatarURL','then','content','map','No\x20aliases','usage','Commands\x20of\x20','split','includes','send','user','name','channel','commands','322920WzGJTL','addField','270QjEQAe','setDescription','120875qFWeLU','react','aliases','Owner','guild','toUpperCase','description','31886EtYBwO','displayHexColor','catch','Example:','AQUA','author','get','setThumbnail','username','4tJwFtg','find','type','aliases:','iconURL','replace','size','257622MJZcEz','794241URMxAe','setColor','57861HNZzRD','873135TZWaNV','__:','log'];_0x5628=function(){return _0xcafc31;};return _0x5628();}function _0x364b(_0x19542e,_0x160a66){var _0x562871=_0x5628();return _0x364b=function(_0x364bd7,_0x3ff52f){_0x364bd7=_0x364bd7-0x10b;var _0x1ec7cb=_0x562871[_0x364bd7];return _0x1ec7cb;},_0x364b(_0x19542e,_0x160a66);}var args=message[_0x239db4(0x137)][_0x239db4(0x13c)]('\x20');if(args[0x1]){var command=client[_0x239db4(0x142)][_0x239db4(0x11d)](_0x36fb=>_0x36fb['name']==args[0x1]),embed=new MessageEmbed();command?embed['setTitle'](_0x239db4(0x134)+command[_0x239db4(0x140)]+'`')['setColor'](message[_0x239db4(0x110)]['me'][_0x239db4(0x114)]&&_0x239db4(0x12b))['setDescription'](''+command[_0x239db4(0x112)])['addField'](_0x239db4(0x11f),''+command[_0x239db4(0x10e)]||_0x239db4(0x139))['addField'](_0x239db4(0x130),''+command[_0x239db4(0x13a)]['replace'](/{prefix}/gi,''+prefix)[_0x239db4(0x121)](/{member}/gi,''+message[_0x239db4(0x118)]))[_0x239db4(0x144)](_0x239db4(0x116),''+command['examples']['replace'](/{prefix}/gi,''+prefix)[_0x239db4(0x121)](/{member}/gi,''+message['author']))['setFooter']({'text':'Requested\x20'+message['author'][_0x239db4(0x12a)],'iconURL':message[_0x239db4(0x118)][_0x239db4(0x135)]({'dynamic':!![]})})['setTimestamp']():embed[_0x239db4(0x10b)]('I\x20can\x27t\x20find\x20this\x20command!'),message[_0x239db4(0x141)][_0x239db4(0x13e)]({'embeds':[embed]});}else{let check=await db[_0x239db4(0x119)](_0x239db4(0x12f)+message[_0x239db4(0x118)]['id']+_0x239db4(0x12d));if(owner[_0x239db4(0x13d)](message['author']['id'])||check==!![]){var types=['image',_0x239db4(0x10f)];let em=new MessageEmbed()[_0x239db4(0x133)]({'name':_0x239db4(0x13b)+client[_0x239db4(0x13f)]['username']})[_0x239db4(0x125)]('AQUA')[_0x239db4(0x11a)](message[_0x239db4(0x110)][_0x239db4(0x120)]({'dynamic':!![],'size':0x800}));for(let i=0x0;i<types[_0x239db4(0x12e)];i++){var cmd=client['commands'][_0x239db4(0x132)](_0x285f09=>_0x285f09[_0x239db4(0x11e)]&&_0x285f09[_0x239db4(0x11e)]==types[i]);cmd[_0x239db4(0x122)]!=0x0&&em[_0x239db4(0x144)]('__'+types[i][_0x239db4(0x111)]()+_0x239db4(0x128),''+cmd[_0x239db4(0x138)](_0x5935e2=>'`'+_0x5935e2[_0x239db4(0x140)]+':`\x20'+_0x5935e2[_0x239db4(0x112)])[_0x239db4(0x12c)](',\x0a'));}message[_0x239db4(0x118)][_0x239db4(0x13e)]({'embeds':[em]})[_0x239db4(0x136)](()=>message[_0x239db4(0x10d)]('✅'))[_0x239db4(0x115)](_0x4b65df=>{var _0xbd397f=_0x239db4;console[_0xbd397f(0x129)](_0x4b65df),message[_0xbd397f(0x10d)]('❌');});}else{if(!owner[_0x239db4(0x13d)](message['author']['id'])){var types=['image'];let em1=new MessageEmbed()[_0x239db4(0x133)]({'name':'Commands\x20of\x20'+client['user'][_0x239db4(0x11b)]})['setColor'](_0x239db4(0x117))[_0x239db4(0x11a)](message['guild'][_0x239db4(0x120)]({'dynamic':!![],'size':0x800}));for(let i=0x0;i<types['length'];i++){var cmd=client['commands']['filter'](_0x23b613=>_0x23b613[_0x239db4(0x11e)]&&_0x23b613[_0x239db4(0x11e)]==types[i]);cmd[_0x239db4(0x122)]!=0x0&&em1[_0x239db4(0x144)]('__'+types[i][_0x239db4(0x111)]()+'__:',''+cmd[_0x239db4(0x138)](_0xde7bc8=>'`'+_0xde7bc8[_0x239db4(0x140)]+':`\x20'+_0xde7bc8[_0x239db4(0x112)])[_0x239db4(0x12c)](',\x0a'));}message[_0x239db4(0x118)][_0x239db4(0x13e)]({'embeds':[em1]})[_0x239db4(0x136)](()=>message[_0x239db4(0x10d)]('✅'))[_0x239db4(0x115)](_0x919c3e=>{var _0x3c934e=_0x239db4;console[_0x3c934e(0x129)](_0x919c3e),message['react']('❌');});}}}
}
}