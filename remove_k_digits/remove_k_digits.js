/**
 * Remove K Digits
 * 
 * Jeremiah 29:11-13
 * "For I know the plans I have for you," declares the LORD,
 * "plans to prosper you and not to harm you, 
 * plans to give you hope and a future. 
 * Then you will call on me and come and pray to me, 
 * and I will listen to you. 
 * You will seek me and find me 
 * when you seek me with all your heart."
 * 
Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.

Example 1:
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

Example 2:
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

Example 3:
Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
 */

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let result = "";
    let leng = num.length;

    if (leng == k){
        return "0";
    }

    if(k==0){
        return num;
    }

    let stack = [];
    let stackSize = 0;
    let ind = {};
    let m = k;
    
    for (let i=0; i<leng; i++){
        let n = Number(num.charAt(i));
        stackSize = stack.length;
        if (stackSize > 0){
            let lastStack = stack[stackSize-1];
            while(m > 0 && lastStack > n){
                result = result.substring(0, result.length-1);
                stack = stack.slice(0, stackSize-1);
                stackSize--;
                m--;
                lastStack = stack[stackSize-1];
            }
        }
        
        stack.push(n);
        result += n;
    }
    
    if(m > 0){
        result = result.substring(0, result.length-m);
    }
    if (result.length > 1 && result.charAt(0) == "0"){
        let i=0;
        while(result.charAt(i) == "0") {
        	i++;
        }
        if (i<result.length-1){
        	result = result.substring(i);
        } else {
        	result = "0";
        }
        
    }
    return result;
};

console.log(removeKdigits("1432219", 3)); // 1219
console.log(removeKdigits("10200", 1)); // 200
console.log(removeKdigits("10", 2)); // 0
console.log(removeKdigits("100", 1)); // 0
console.log(removeKdigits("10000", 1)); // 0

/*
console.log(removeKdigits("99641436378815361153471302158193420182863684789411484994976484827114595334610042544056442370530816060833617030976813134098793056155103202008549344446519354408307307071055065112738442020228471569394796174150323080161225901964338837341524253243218509500254619223683091799365677720582389568156585225666197123093377871100002481402486219837255411382162499321193416524972275273471969155848742457476556433737281147710021781210134765321761285612276511917324552585569882156635094670362653567596144728653795007023230933817566104488637696450166087905100823699425798763598444326069357052842379918535855296915760054459317433521878778171811081076593166663090948029793113626852462712388116483774713426183911481230884393594249331828165503798269634244430773693033882708000249632850148799859322024693146577635543114657662418998860517525989192973250701631765598465053097616804817344343895016724561947860836117504915797011185132674255278236597746042138768473723059825948301565719437610732907662545499042953499866813741157301003371005200992314265077531029437948931255617153417148822355928318598517533241719641002712204874161001604269216566928220767474713135516717997491363360204764154264989004671363541097433484822118483642107547658581450616821769964767032521138851570822729134762460014265433227201724724004338494552397280090568164786109721571436206198382814849033856987338787473335772666933218810822482848994610491705665155516384799459418594559136827941106387689501641851101743298582575466303864906673788496628288920867422193950180810131396612913851112593807649152972068279299934113463669714575613645929365652921808836725682390026075559320995704880149764583379697505303474550029059828116836469203370428449330442281563135568935742669243344218603994417955703485059862132359688776290378210392955310785874528205203788559715493852405991380290274268143557970398441851157977520689440430265144029789788511042795879174567381358510694749512938934687979305099149575464220629804942550564164786808856897809863824121659548034395539735407069279457678613909222371848892294754933299091164656871086269084324529512544747434123547189729993758337622038098699448815701644934651292719067683227727438808955969543542319197883567369733867364250353136697865107182282929655918362211832327827571354787535611501731943856155003853732339819594939524719169561110698571676562329360803282215467534058504728127731515598941143637827010955579092451405821352126706550438315176049692316210490899702613078702535716735901806171522853021035597316703390478571485677998207922773938829371460838611214446417528913575284776737837046439695408523434414916342979688820197836458637694991540998291690345194205452439239827382953039810367712244590155940394387554911786652478111954297185544106384174592451680875083737874735810068767866214924634885513828808880161930987276602570872860752119813042414550396358433893592777541756673206882876746731707766966268096104320061937913505893028833592137540396064375155513979764728180927083060481127522118240026140625647313783901073938419240249929000962722034273952683635919540169732220854978101308126446671885186032295490845060116567165945677975672981321362161949418405852378788584602802612398876874288293756055559457538271197205867506313677160755990736347314715042607243878693780144368083800080967842966193539823770427967091132770230485036143223363387876244958899577538069175123004651952588711287008791159682042581943812962882375293348462523257081140457567348612069746943329842264291823570671268374580651696311114624358304235261945894627668267192756606441264485628097480920062857007640396910214970556623416565940789636657349735150043836194242061994234044262604284350296258397208287158735477739515615890093167555389262170576609082365199242352356197706754361085079177223144662701424848070607319078068303190442737202186364818021792860690571733432439513976759807778513151206801184300729685910765785586373831699595178352610150383283823456881293647763022411686252640648120690251120902631370825525354213297549430441989419362406888242180413640397005462289002837178086683143441254722528075315187910994986929463063282350677644105312484770818851268755183086729904524488901102287310169865855725358976453628171038414004415469635124255044890245890050115901243603489384920067923087045070616429510114587493955384903357111302068595548921504222171096098548413208088831560744996899783844118318185694142620796984004522106434428513215881883542758888862576036415421097762413907290417004936441609238204617100586876487061497586106631983740139555573272626681186969272113315348553052708453716313010811194726904231406455432865684477036960953564406390115786323388585604716504384778912812410729908949581143722120318954849846535676912868526526501078193502393524062471534154104899815734648650035608611113327222040864146091286020205304970098510045582130989981665393076480660907742469107193219475618455618115516353495211289597815564506193368287178714208989206470099207227171770619580227427772058576958549342547850566371060314330889132466260972915500785842700966615103949831075688522846389635990078358138687466663099265099431775674237640711466272609872329090894406587154198409486434056948991642623725868520261081714501891452704954562834244485695899485150794033902595303371632597184940525684558272222395813587950566598836575728711404672894869851301199508345442816914540274231773573695049117433232750564343477296571911336451338765122801905492189124021699698020217831160061375249740348841211772476455089061870953510480256335713228323198782026742817220321247980121667780800877801219532811542139900480803615083739957513418528009253849655053312995534574307148952727627870318872325094411860749809155407484065987101730385346571248798467212335910821152286411077915790397497756477613051365987943518909759211252763081626026136209474490841118337332773116122063152414208776801671614382203998310801791046109980464795153775904284579208046765170299376571712696359391195309011046580945099118345329164807866461624513459858969478261348365746242842254100449074846018162381649508771205692387943049083877156128753239386498305599949138477358461424273464036997642435352074743094695564535693378173888280633866732018710701060752702258884562187458492514181027419045608607139753797741693225900923436163273291784047946102859573341135995351940672974945745062320931107916232460722010886651827074516009065280667168017782964663521168472263155891094369134584611694802620433621767214124173962636180142978128638945692419270222518432363382128100260544917455244318162619360808797214154001396840051520865249909119773623276044783996235484958441702533661095335337458603732924068113476544273220040621287278168707393471504842692312354782265568742305367773635557008065688109790648713350572351799924638273829816187626279342407486758617884199669669286080608957640162096427744397522103026413782698158732581790000716751490076906346484023835702438474105176931779065689980130347837155056303467742499515965713045957954225592059807462917282749105358673064716135765849677591608061323905019687616579401117839719269327243007586938365568212311638431283680946079388989080798521721770825311237382299640977231722390040018733060008726711369177955792504805871660952275133036361448257222162174106121886956846208577175900217031085260775753651365765038925717954695019720235653672968689019573262654460436772900765775615489257834882352941349073672575670561593061387879337673233294306479935031268311515186416299622966578517978675818927585118344348361158710756313053131716293124192982037977789379782122120656399498488608931743952536041546453299501041577456229618221253519224906611827751220393777623642577532653929191439603183004880021982807536023221789599010502125687724004685177438516674638976736887749480118357141229355178588718777866510629202733751110559334924038607709059709853979249569510212755627954315025008066453716096825677236680969921750877126730256949811077056975031686370565845816981036167892330455103497165407984322792515265566483796338273488042877728447328933645773410093062365682687268013318931065552717013674172822704288279197461978805944285413220284999303849740540429893025407810120053701999064303195562726870079068213843151094378846458471168159763363401468459072474435300433314015701363633705309153196187013664717617975618648227816754951474354742056233896619815305871556180590934191775446450232435064334173434855333465262160341517250209548644211312373841441024747539900101488865742679168673356769004244781832745045012713439497231232255815861738982590755401780194874615548229070120796893835181030047378827641086164272219294123942746140207443292075817414598536256892540490923602419336928186124051416665048479530882042184097629985897052425322145715174649893481917612568426372077919256931921063600255204010662044398922537796993713110889134889921360833579323314386803074533058134342770923839546994120322442157750203621967931319597649960815556196358566683782572730174920215034531104191490057838260392829741446722127017532444082857280503217574522928285094747407153894570747792487061998260753833304433675066923630595212677695003060727653119915126939127827754432456052655283764591328484359469704894122366077507922825301623961196207923544095047285011474898262448957681893278273601046641810135121516552187096005252171171905022763076761687166299014789581539855448453229411352775826042558462563147630238335355859149814380543807473386539264830261256996173935860136236427622918234260408201158550118527706241993700526213016072648406003487895118011337828945314863348154387066988573131543747121745028364818130265528614742576976975564213718421245904443000581698214695522541683926528961160986876871840844632069685227319014872180179370554032205521013345746425253133686231659075343389374580200717637698542920298315739628019867736462368334051114029380922339886663078026309916370486909128253195100898377068612057592121356555290537815049586626181680384845905180029133497372417653664436161971980137048236053329456957495141918670077299206755740534997886723627476115663811233372206043170460623060506091246306386543951687123557178508806912199010111871", 1000));
*/
