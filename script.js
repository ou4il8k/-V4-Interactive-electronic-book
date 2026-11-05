const pages = [
{type:"cover",chapter:"الغلاف",title:"من الصفر إلى تصميم صفحات الويب",subtitle:"دليل مبسّط لفهم HTML و CSS",body:"رحلة تعليمية تفاعلية لفهم لغة بناء المحتوى ولغة تنسيق الواجهات.",meta:"من اعداد المبرمج وائل علية . و تحت اشراف الأستاذة ليغة سهام",art:"cover"},
{chapter:"البداية",kicker:"01 · مدخل إلى الويب",title:"كيف تعمل صفحة الويب؟",paragraphs:["صفحة الويب هي مستند رقمي يعرضه المتصفح للمستخدم. قد تحتوي على نصوص وصور وروابط وأزرار ونماذج، ويمكن أن تكون بسيطة مثل صفحة تعريفية أو متقدمة مثل متجر إلكتروني.","عند فتح عنوان موقع، يطلب المتصفح الملفات من الخادم ثم يقرأها ويحوّلها إلى عناصر مرئية. غالباً ما تتعاون ثلاث تقنيات: HTML لبناء المحتوى، وCSS لتنسيقه، وJavaScript لإضافة التفاعل."],diagram:"web",tip:"تخيّل الصفحة كمنزل: HTML هو الهيكل والغرف، وCSS هو الطلاء والأثاث، وJavaScript هو الكهرباء والأجهزة التي تستجيب لك."},
{chapter:"البداية",kicker:"02 · ما هي HTML؟",title:"لغة HTML: هيكل الصفحة",paragraphs:["HTML اختصار لـ HyperText Markup Language، أي لغة ترميز النص التشعبي. وهي ليست لغة برمجة تقليدية؛ بل لغة تصف معنى المحتوى وبنيته باستخدام عناصر تسمّى الوسوم (Tags).","يكتب المطوّر الوسم حول المحتوى ليخبر المتصفح إن كان عنواناً أو فقرة أو صورة أو رابطاً. يفهم المتصفح هذه البنية ويعرضها بطريقة مناسبة."],code:'<h1>مرحباً بك في موقعي</h1>\\n<p>هذه فقرة تعريفية بسيطة.</p>\\n<a href=\"about.html\">اعرف المزيد</a>',tip:"اختر الوسم بحسب معنى المحتوى، لا بحسب شكله فقط. التنسيق مسؤولية CSS."},
{chapter:"البداية",kicker:"03 · بنية المستند",title:"الهيكل الأساسي لملف HTML",paragraphs:["يبدأ كل مستند HTML حديث بتعريف نوع المستند <!DOCTYPE html> حتى يستخدم المتصفح معيار HTML الحديث. بعده يأتي العنصر html الذي يحتوي على الرأس head والجسم body.","يضم head معلومات لا تظهر عادة داخل الصفحة، مثل الترميز والعنوان وربط ملفات CSS. أما body فيضم المحتوى الذي يراه الزائر."],code:'<!DOCTYPE html>\\n<html lang=\"ar\" dir=\"rtl\">\\n<head>\\n  <meta charset=\"UTF-8\">\\n  <title>صفحتي الأولى</title>\\n</head>\\n<body>\\n  <h1>أهلاً بالعالم</h1>\\n</body>\\n</html>',diagram:"structure",tip:"عند إنشاء صفحة عربية، استخدم lang=\"ar\" و dir=\"rtl\" لتحسين اللغة واتجاه القراءة."},
{chapter:"عناصر HTML",kicker:"04 · العناوين",title:"العناوين من h1 إلى h6",paragraphs:["توفر HTML ستة مستويات من العناوين، تبدأ بـ h1 وهو العنوان الأعلى أهمية، وتنتهي بـ h6. تساعد هذه المستويات على تقسيم الموضوع إلى أقسام رئيسية وفرعية.","من الأفضل ترتيب العناوين منطقياً: عنوان رئيسي للصفحة، ثم عناوين للأقسام، ثم عناوين فرعية عند الحاجة. لا تختَر مستوى العنوان لمجرد أن حجمه يبدو مناسباً؛ غيّر حجمه باستخدام CSS."],code:'<h1>دليل تطوير الويب</h1>\\n<h2>تعلم HTML</h2>\\n<h3>العناوين والفقرات</h3>\\n<h2>تعلم CSS</h2>',diagram:"headings",tip:"غالباً استخدم h1 واحداً واضحاً للموضوع الأساسي، ثم نظّم بقية العناوين بحسب تسلسل الأفكار."},
{chapter:"عناصر HTML",kicker:"05 · الفقرات والنصوص",title:"الفقرات وتنظيم النص",paragraphs:["يُستخدم الوسم p لكتابة فقرة نصية. الفقرة وحدة مستقلة من النص، ويضيف المتصفح مسافة قبلها وبعدها افتراضياً. لا تستخدم br لصناعة مسافات كبيرة؛ قسّم النص إلى فقرات واضحة.","يمكن إبراز جزء من النص باستخدام strong للأهمية القوية، وem للتأكيد، وmark للتظليل. هذه العناصر تضيف معنى دلالياً إلى النص، ويمكن تغيير مظهرها لاحقاً بواسطة CSS."],code:'<p>HTML تبني <strong>هيكل الصفحة</strong>.</p>\\n<p>أما CSS فتضيف <em>التنسيق والجمال</em>.</p>\\n<p>تعلّم اليوم <mark>خطوة جديدة</mark>.</p>',tip:"الفقرات القصيرة والعناوين الواضحة تجعل القراءة أسهل، خصوصاً على شاشات الهواتف."},
{chapter:"عناصر HTML",kicker:"06 · القوائم والروابط",title:"القوائم والروابط",paragraphs:["تُستخدم ul لإنشاء قائمة غير مرتبة تظهر عادة بنقاط، بينما ol تنشئ قائمة مرتبة بالأرقام. وكل عنصر داخل القائمة يكتب باستخدام li.","أما الرابط a فينقل المستخدم إلى صفحة أخرى أو موقع خارجي أو جزء محدد من الصفحة. تحدد الخاصية href وجهة الرابط، ويجب أن يكون نص الرابط واضحاً ويشرح ما سيحدث عند النقر."],code:'<ul>\\n  <li>تعلم HTML</li>\\n  <li>تعلم CSS</li>\\n</ul>\\n<a href=\"https://example.com\">زيارة الموقع</a>',diagram:"lists",tip:"اكتب نصاً وصفياً للرابط مثل «تحميل الدليل» بدلاً من «اضغط هنا»."},
{chapter:"عناصر HTML",kicker:"07 · الصور",title:"إضافة الصور إلى الصفحة",paragraphs:["يُستخدم الوسم img لإدراج صورة. أهم خاصية فيه هي src التي تحدد مسار الصورة، وalt التي تقدم وصفاً بديلاً يظهر عند تعذر تحميل الصورة ويساعد قارئات الشاشة.","الصورة عنصر فارغ؛ لذلك لا يحتاج إلى وسم إغلاق. ومن الممارسات الجيدة تحديد عرض مرن عبر CSS حتى لا تتجاوز الصورة مساحة الحاوية."],code:'<img src=\"images/campus.jpg\"\\n     alt=\"مبنى الجامعة\"\\n     class=\"photo\">',diagram:"image",tip:"لا تترك alt فارغاً إذا كانت الصورة تحمل معلومة مهمة. أما الصور الزخرفية البحتة فيمكن أن يكون alt فارغاً."},
{chapter:"عناصر HTML",kicker:"08 · العناصر الدلالية",title:"العناصر الدلالية Semantic HTML",paragraphs:["العناصر الدلالية توضّح وظيفة كل جزء من الصفحة. من أمثلتها header لرأس الصفحة، nav للتنقل، main للمحتوى الرئيسي، section لقسم موضوعي، article لمحتوى مستقل، وfooter للتذييل.","استخدام العناصر الدلالية يجعل الشيفرة أسهل للفهم والصيانة، ويساعد التقنيات المساعدة ومحركات البحث على استيعاب بنية المحتوى."],diagram:"semantic",tip:"لا تستبدل كل شيء بـ div. استخدم العنصر الذي يعبّر عن وظيفة المحتوى عندما يكون مناسباً."},
{chapter:"عالم CSS",kicker:"09 · مقدمة CSS",title:"ما هي CSS؟",paragraphs:["CSS اختصار لـ Cascading Style Sheets، أي أوراق الأنماط المتتالية. تتحكم في طريقة ظهور عناصر HTML: الألوان، والخطوط، والأحجام، والمسافات، والحدود، والتخطيطات، والحركة.","تفصل CSS العرض البصري عن بنية المحتوى. وهذا يعني أنك تستطيع تغيير تصميم الموقع بالكامل دون إعادة كتابة نصوص HTML."],code:'h1 {\\n  color: #7542df;\\n  font-size: 32px;\\n  text-align: center;\\n}',diagram:"css"},
{chapter:"عالم CSS",kicker:"10 · ربط CSS",title:"طرق إضافة CSS إلى HTML",paragraphs:["هناك ثلاث طرق شائعة: التنسيق الداخلي داخل الخاصية style، وكتابة CSS داخل وسم style في head، والأفضل للمشاريع المنظمة ربط ملف خارجي باستخدام link.","الملف الخارجي يجعل التصميم قابلاً لإعادة الاستخدام بين صفحات متعددة، ويحافظ على نظافة HTML. في هذا المشروع مثلاً يوجد ملف style.css منفصل عن ملف الصفحة."],code:'<head>\\n  <link rel=\"stylesheet\" href=\"style.css\">\\n</head>',tip:"تأكد من صحة اسم الملف والمسار. إذا لم يظهر التنسيق، افحص اسم style.css ومكانه وحروفه."},
{chapter:"عالم CSS",kicker:"11 · المحددات",title:"محددات CSS: من ننسّق؟",paragraphs:["المحدد (Selector) يختار العنصر الذي ستُطبّق عليه القواعد. محدد العنصر مثل p يختار كل الفقرات، ومحدد الصنف يبدأ بنقطة مثل .card، ومحدد المعرّف يبدأ بـ # مثل #header.","يمكن دمج المحددات لاستهداف عناصر أدق، لكن الإفراط في التعقيد يجعل التنسيق أصعب في التعديل. غالباً تكون الأصناف classes خياراً مرناً لإعادة الاستخدام."],code:'p { color: #444; }\\n.card { padding: 20px; }\\n#main-title { font-size: 2rem; }',diagram:"selectors",tip:"يمكن استخدام الصنف نفسه لأكثر من عنصر، لكن قيمة id يفترض أن تكون فريدة داخل الصفحة."},
{chapter:"عالم CSS",kicker:"12 · الألوان والخطوط",title:"الألوان والخطوط والخلفيات",paragraphs:["تدعم CSS طرقاً متعددة لتحديد اللون، مثل الأسماء الجاهزة وHex وRGB وHSL. اختر ألواناً تحقق تبايناً واضحاً بين النص والخلفية حتى تبقى القراءة مريحة.","يمكن التحكم في نوع الخط عبر font-family، وحجمه عبر font-size، ووزنه عبر font-weight، وارتفاع السطر عبر line-height. أما background فيسمح بتحديد لون أو صورة أو تدرج للخلفية."],code:'body {\\n  font-family: Arial, sans-serif;\\n  color: #242033;\\n  background: #f5f1ff;\\n  line-height: 1.8;\\n}',tip:"لا تجعل اللون وحده وسيلة توصيل المعلومة؛ أضف نصاً أو رمزاً واضحاً عند الحاجة."},
{chapter:"عالم CSS",kicker:"13 · نموذج الصندوق",title:"Box Model: كيف تُحسب المساحة؟",paragraphs:["كل عنصر في CSS يُعامل غالباً كصندوق يتكون من المحتوى content، والحشو الداخلي padding، والحدود border، والهامش الخارجي margin.","تؤثر هذه الطبقات في المساحة التي يشغلها العنصر. الخاصية box-sizing: border-box تجعل العرض والارتفاع يشملان الحشو والحدود، وهي قاعدة شائعة لتسهيل الحساب."],diagram:"box",code:'* { box-sizing: border-box; }\\n.card {\\n  width: 300px;\\n  padding: 20px;\\n  border: 2px solid #9b73e8;\\n  margin: 16px;\\n}'},
{chapter:"عالم CSS",kicker:"14 · التخطيط المتجاوب",title:"Flexbox و Grid والتجاوب",paragraphs:["Flexbox مناسب لترتيب العناصر في اتجاه واحد، صف أو عمود، مع توزيع المساحات ومحاذاة العناصر. أما Grid فينظم التخطيط في صفوف وأعمدة معاً، وهو مفيد للشبكات وبنية الصفحات.","التصميم المتجاوب Responsive Design يجعل الواجهة مناسبة لأحجام الشاشات المختلفة. تستخدم media queries لتغيير القواعد عند عرض معين، مع تفضيل الوحدات المرنة والصور القابلة للتقلص."],code:'.cards {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  gap: 16px;\\n}\\n@media (max-width: 700px) {\\n  .cards { grid-template-columns: 1fr; }\\n}',diagram:"responsive",tip:"اختبر الصفحة على الهاتف والكمبيوتر، ولا تعتمد على عرض ثابت كبير قد يسبب تمريراً أفقياً."},
{chapter:"التطبيق",kicker:"15 · تطبيق عملي",title:"بناء بطاقة تعريف بسيطة",paragraphs:["لنطبّق ما تعلمناه بإنشاء بطاقة تعريف تحتوي على عنوان وفقرة ورابط. نكتب أولاً البنية الدلالية في HTML، ثم نضيف التنسيق في ملف CSS منفصل.","لاحظ كيف يحمل HTML المعنى والمحتوى، بينما تتحكم CSS في اللون والمسافات والحواف. جرّب تغيير اللون أو حجم العنوان وشاهد كيف يتغير المظهر دون تغيير بنية الصفحة."],code:'<article class=\"profile-card\">\\n  <h2>طالب تطوير الويب</h2>\\n  <p>أتعلم بناء واجهات الويب.</p>\\n  <a href=\"#contact\">تواصل معي</a>\\n</article>',tip:"التطبيق العملي أفضل طريقة لترسيخ المفاهيم. اكتب المثال بنفسك ثم جرّب تعديله."},
{chapter:"الخاتمة",kicker:"16 · خلاصة وتوجيهات",title:"ماذا بعد HTML و CSS؟",paragraphs:["أصبحت تعرف الآن كيف تبني هيكل صفحة باستخدام HTML، وكيف تمنحها مظهراً منظماً باستخدام CSS. تعلمت العناوين والفقرات والقوائم والصور والعناصر الدلالية، ثم المحددات والألوان ونموذج الصندوق والتخطيط المتجاوب.","الخطوة التالية هي إنشاء مشروع صغير من اختيارك، مثل صفحة شخصية أو صفحة تعريف بجامعة أو معرض أعمال. بعد إتقان الأساسيات، ابدأ JavaScript لتضيف التفاعل والمنطق إلى صفحاتك."],diagram:"journey",tip:"تذكّر: المبرمج الجيد لا يحفظ كل الخصائص؛ بل يعرف كيف يبحث، ويجرّب، ويختبر، ويحسّن عمله.",meta:"نهاية الكتاب · بالتوفيق في رحلتك"}
];

const right = document.getElementById('rightPage');
const left = document.getElementById('leftPage');
const book = document.getElementById('book');
const total = pages.length;
let spread = 0, busy = false;
const $ = id => document.getElementById(id);
$('totalPages').textContent = String(total).padStart(2,'0');

function svg(type){
 const common='font-family="Cairo, sans-serif"';
 const diagrams={
 web:`<svg viewBox="0 0 440 150" ${common}><rect x="20" y="15" width="400" height="120" rx="12" fill="#fff" stroke="#cfc1e5"/><rect x="20" y="15" width="400" height="23" rx="10" fill="#e9e0f6"/><circle cx="36" cy="26" r="4" fill="#9b70df"/><circle cx="50" cy="26" r="4" fill="#c2a8ed"/><circle cx="64" cy="26" r="4" fill="#d9c9f0"/><rect x="40" y="52" width="125" height="65" rx="7" fill="#eee7f8"/><rect x="180" y="54" width="210" height="10" rx="4" fill="#8e61d1"/><rect x="180" y="73" width="180" height="6" rx="3" fill="#d3c8e4"/><rect x="180" y="87" width="195" height="6" rx="3" fill="#d3c8e4"/><rect x="180" y="101" width="110" height="13" rx="5" fill="#a77be7"/></svg>`,
 structure:`<svg viewBox="0 0 440 170" ${common}><rect x="95" y="8" width="250" height="154" rx="10" fill="#fff" stroke="#8f69cb" stroke-width="2"/><rect x="108" y="20" width="224" height="28" rx="5" fill="#e9ddfa"/><text x="220" y="39" text-anchor="middle" font-size="12" fill="#68459d">html</text><rect x="120" y="58" width="200" height="37" rx="5" fill="#e4f0ff"/><text x="220" y="81" text-anchor="middle" font-size="12" fill="#3e6b9b">head</text><rect x="120" y="105" width="200" height="43" rx="5" fill="#efe6ff"/><text x="220" y="131" text-anchor="middle" font-size="12" fill="#68459d">body</text></svg>`,
 headings:`<svg viewBox="0 0 440 145" ${common}><text x="220" y="27" text-anchor="middle" font-size="17" font-weight="bold" fill="#51317f">h1 · العنوان الرئيسي</text><text x="220" y="54" text-anchor="middle" font-size="14" font-weight="bold" fill="#69499a">h2 · عنوان قسم</text><text x="220" y="79" text-anchor="middle" font-size="12" font-weight="bold" fill="#8767b0">h3 · عنوان فرعي</text><text x="220" y="101" text-anchor="middle" font-size="10" fill="#9b88b6">h4 · مستوى رابع</text><text x="220" y="119" text-anchor="middle" font-size="9" fill="#aa9abc">h5 · مستوى خامس</text><text x="220" y="135" text-anchor="middle" font-size="8" fill="#b8a9c9">h6 · مستوى سادس</text></svg>`,
 lists:`<svg viewBox="0 0 440 125" ${common}><rect x="20" y="10" width="185" height="105" rx="10" fill="#fff" stroke="#d9cde9"/><rect x="235" y="10" width="185" height="105" rx="10" fill="#fff" stroke="#d9cde9"/><text x="112" y="31" text-anchor="middle" font-size="12" fill="#724da9">قائمة غير مرتبة ul</text><text x="260" y="31" font-size="10" fill="#665b76">• HTML</text><text x="260" y="53" font-size="10" fill="#665b76">• CSS</text><text x="260" y="75" font-size="10" fill="#665b76">• JavaScript</text><text x="327" y="31" text-anchor="middle" font-size="12" fill="#724da9">قائمة مرتبة ol</text><text x="255" y="53" font-size="10" fill="#665b76">1. التخطيط</text><text x="255" y="75" font-size="10" fill="#665b76">2. البناء</text><text x="255" y="97" font-size="10" fill="#665b76">3. التنسيق</text></svg>`,
 image:`<svg viewBox="0 0 440 130" ${common}><rect x="85" y="8" width="270" height="112" rx="10" fill="#eee7f8" stroke="#cfc1e5"/><circle cx="285" cy="37" r="13" fill="#b99be7"/><path d="M100 103 L175 43 L225 82 L264 58 L340 103Z" fill="#9d7bc9"/><path d="M100 103 L170 67 L212 103Z" fill="#7551a9"/><text x="220" y="117" text-anchor="middle" font-size="8" fill="#fff">صورة توضيحية</text></svg>`,
 semantic:`<svg viewBox="0 0 440 165" ${common}><rect x="65" y="8" width="310" height="150" rx="9" fill="#fff" stroke="#d6c9e8"/><rect x="80" y="18" width="280" height="23" rx="4" fill="#e6dcf6"/><text x="220" y="34" text-anchor="middle" font-size="10" fill="#67459b">header</text><rect x="80" y="47" width="280" height="17" rx="4" fill="#e6f0ff"/><text x="220" y="59" text-anchor="middle" font-size="9" fill="#5179a7">nav</text><rect x="80" y="70" width="190" height="64" rx="4" fill="#f0e8fc"/><text x="175" y="88" text-anchor="middle" font-size="10" fill="#67459b">main</text><rect x="282" y="70" width="78" height="64" rx="4" fill="#e6f5ef"/><text x="321" y="106" text-anchor="middle" font-size="9" fill="#4c8a6c">aside</text><rect x="80" y="139" width="280" height="12" rx="3" fill="#fce9f2"/><text x="220" y="149" text-anchor="middle" font-size="7" fill="#9a5578">footer</text></svg>`,
 css:`<svg viewBox="0 0 440 135" ${common}><rect x="15" y="12" width="190" height="110" rx="10" fill="#211a32"/><text x="32" y="38" font-size="11" fill="#d4b5ff">h1 {</text><text x="48" y="59" font-size="10" fill="#91d6ff">color: purple;</text><text x="48" y="78" font-size="10" fill="#b9e59b">font-size: 32px;</text><text x="32" y="98" font-size="11" fill="#d4b5ff">}</text><path d="M220 67 H265" stroke="#9a70df" stroke-width="3" stroke-linecap="round"/><path d="M255 57 L267 67 L255 77" fill="none" stroke="#9a70df" stroke-width="3"/><rect x="282" y="12" width="142" height="110" rx="10" fill="#f1eaff" stroke="#d4c2ed"/><text x="353" y="48" text-anchor="middle" font-size="13" fill="#553887">عنوان جميل</text><rect x="307" y="60" width="92" height="5" rx="2" fill="#b7a3d7"/><rect x="320" y="73" width="66" height="5" rx="2" fill="#cbbbe3"/><rect x="325" y="91" width="56" height="17" rx="6" fill="#8f62d0"/></svg>`,
 selectors:`<svg viewBox="0 0 440 125" ${common}><rect x="10" y="12" width="125" height="95" rx="8" fill="#eee6fa"/><text x="72" y="40" text-anchor="middle" font-size="12" fill="#69469e">p</text><text x="72" y="61" text-anchor="middle" font-size="9" fill="#5f566d">كل الفقرات</text><rect x="157" y="12" width="125" height="95" rx="8" fill="#e7f1ff"/><text x="219" y="40" text-anchor="middle" font-size="12" fill="#4676a9">.card</text><text x="219" y="61" text-anchor="middle" font-size="9" fill="#5f566d">عنصر يحمل صنفاً</text><rect x="304" y="12" width="125" height="95" rx="8" fill="#fceaf3"/><text x="366" y="40" text-anchor="middle" font-size="12" fill="#a0527b">#header</text><text x="366" y="61" text-anchor="middle" font-size="9" fill="#5f566d">عنصر بمعرّف</text></svg>`,
 box:`<svg viewBox="0 0 440 160" ${common}><rect x="105" y="8" width="230" height="140" rx="7" fill="#f5dba9" stroke="#d0a75d"/><text x="220" y="25" text-anchor="middle" font-size="10" fill="#75521c">margin</text><rect x="130" y="34" width="180" height="95" rx="6" fill="#a8d6c3" stroke="#63a98d"/><text x="220" y="49" text-anchor="middle" font-size="10" fill="#28674e">border</text><rect x="153" y="58" width="134" height="55" rx="5" fill="#c7b0ee" stroke="#9670cf"/><text x="220" y="72" text-anchor="middle" font-size="9" fill="#51327f">padding</text><rect x="176" y="80" width="88" height="23" rx="4" fill="#fff"/><text x="220" y="95" text-anchor="middle" font-size="9" fill="#493c5c">content</text></svg>`,
 responsive:`<svg viewBox="0 0 440 140" ${common}><rect x="30" y="12" width="175" height="112" rx="8" fill="#e9e0f7" stroke="#a98bcf" stroke-width="3"/><rect x="42" y="24" width="151" height="18" rx="3" fill="#b99be7"/><rect x="42" y="50" width="70" height="60" rx="4" fill="#fff"/><rect x="120" y="50" width="73" height="60" rx="4" fill="#fff"/><rect x="257" y="12" width="75" height="112" rx="10" fill="#e7f0ff" stroke="#8caed8" stroke-width="3"/><rect x="265" y="25" width="59" height="15" rx="3" fill="#9ebde5"/><rect x="265" y="47" width="59" height="28" rx="3" fill="#fff"/><rect x="265" y="81" width="59" height="28" rx="3" fill="#fff"/><text x="117" y="137" text-anchor="middle" font-size="9" fill="#69469e">شاشة كبيرة</text><text x="295" y="137" text-anchor="middle" font-size="9" fill="#527aa8">هاتف</text></svg>`,
 journey:`<svg viewBox="0 0 440 115" ${common}><path d="M60 55 H380" stroke="#c5b0e5" stroke-width="4" stroke-linecap="round"/><g fill="#8d62ce"><circle cx="60" cy="55" r="17"/><circle cx="165" cy="55" r="17"/><circle cx="275" cy="55" r="17"/><circle cx="380" cy="55" r="17"/></g><g fill="white" font-size="12" text-anchor="middle"><text x="60" y="59">1</text><text x="165" y="59">2</text><text x="275" y="59">3</text><text x="380" y="59">4</text></g><g fill="#60418e" font-size="10" text-anchor="middle"><text x="60" y="91">HTML</text><text x="165" y="91">CSS</text><text x="275" y="91">تطبيق</text><text x="380" y="91">مشروعك</text></g></svg>`
 };
 return diagrams[type]||'';
}
function esc(s){return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')}
function codeHTML(code){return `<div class="code-block"><button class="copy-code" type="button">نسخ</button><code>${esc(code)}</code></div>`}
function renderPage(index,side){
 const p=pages[index];
 if(!p)return `<div class="page-content"></div>`;
 if(p.type==='cover')return `<div class="page-content cover-page"><img class="cover-image" src="Neon Purple Arabic Web Design Guide.png" alt="غلاف كتاب من الصفر إلى تصميم صفحات الويب"></div>`;
 let out=`<div class="page-content"><div class="page-kicker">${p.kicker||p.chapter}</div><h2>${p.title}</h2>`;
 (p.paragraphs||[]).forEach(x=>out+=`<p>${esc(x)}</p>`);
 if(p.diagram)out+=`<div class="diagram">${svg(p.diagram)}</div>`;
 if(p.code)out+=codeHTML(p.code.replaceAll('\\\\n','\n'));
 if(p.tip)out+=`<div class="tip"><b>معلومة مهمة:</b> ${esc(p.tip)}</div>`;
 if(p.meta)out+=`<p><b>${esc(p.meta)}</b></p>`;
 out+=`<div class="page-number"><span>${esc(p.chapter||'دليل HTML و CSS')}</span><b>${String(index+1).padStart(2,'0')}</b></div></div>`;
 return out;
}
function render(){
 right.innerHTML=renderPage(spread,'right');
 left.innerHTML=renderPage(spread+1,'left');
 $('currentPage').textContent=String(Math.min(spread+1,total)).padStart(2,'0');
 $('progressBar').style.width=((Math.min(spread+2,total)/total)*100)+'%';
 $('progressText').textContent=Math.round((Math.min(spread+2,total)/total)*100)+'% مكتمل';
 $('chapterLabel').textContent=pages[spread]?.chapter||'';
 const atStart=spread===0,atEnd=spread>=total-1;
 $('prevBtn').disabled=$('bottomPrev').disabled=atStart;
 $('nextBtn').disabled=$('bottomNext').disabled=atEnd;
 $('bottomNext').innerHTML=atEnd?'انتهى الكتاب ✓':'الصفحة التالية <span>←</span>';
 document.querySelectorAll('.copy-code').forEach(btn=>btn.addEventListener('click',()=>copyCode(btn)));
}
function turn(dir){
 if(busy)return;
 const next=dir>0?Math.min(spread+2,total-1):Math.max(spread-2,0);
 if(next===spread)return;
 busy=true;book.classList.add(dir>0?'turn-next':'turn-prev');
 setTimeout(()=>{spread=next;render();book.classList.remove('turn-next','turn-prev');busy=false;},260);
}
function copyCode(btn){
 const code=btn.parentElement.querySelector('code').textContent;
 navigator.clipboard?.writeText(code).then(()=>showToast('تم نسخ الكود')).catch(()=>showToast('تعذر النسخ في هذا المتصفح'));
}
function showToast(msg){$('toast').textContent=msg;$('toast').classList.add('show');setTimeout(()=>$('toast').classList.remove('show'),1800)}
$('prevBtn').onclick=$('bottomPrev').onclick=()=>turn(-1);
$('nextBtn').onclick=$('bottomNext').onclick=()=>turn(1);
document.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')turn(1);if(e.key==='ArrowRight')turn(-1);if(e.key==='Escape')closeModal()});
const backdrop=$('modalBackdrop');
function openModal(){backdrop.classList.add('open')}
function closeModal(){backdrop.classList.remove('open')}
$('contentsBtn').onclick=openModal;$('closeModal').onclick=closeModal;
backdrop.addEventListener('click',e=>{if(e.target===backdrop)closeModal()});
$('helpBtn').onclick=()=>showToast('الأسهم للتنقل · ☷ للفهرس · ⛶ لملء الشاشة');
$('themeBtn').onclick=()=>document.body.classList.toggle('light-mode');
$('fullscreenBtn').onclick=()=>{if(!document.fullscreenElement)document.querySelector('.reader').requestFullscreen?.();else document.exitFullscreen?.()};
$('thumbBtn').onclick=openModal;
$('tocList').innerHTML=pages.map((p,i)=>`<button class="toc-item" data-page="${i}"><span class="toc-num">${String(i+1).padStart(2,'0')}</span><span>${esc(p.title||p.chapter)}<small>${esc(p.chapter||'')}</small></span></button>`).join('');
$('tocList').addEventListener('click',e=>{const item=e.target.closest('[data-page]');if(!item)return;spread=Math.min(Number(item.dataset.page),total-1);if(spread%2)spread--;render();closeModal()});
render();

// تفاعل غلاف الكتاب: ميلان خفيف مع حركة المؤشر ولمعة عند النقر
const coverBook = $('book');
coverBook.addEventListener('pointermove', (event) => {
  const image = event.target.closest('.cover-image');
  if (!image || event.pointerType === 'touch') return;
  const rect = image.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;
  image.style.setProperty('--cover-rotate-y', `${(x - 0.5) * 5}deg`);
  image.style.setProperty('--cover-rotate-x', `${(0.5 - y) * 5}deg`);
});
coverBook.addEventListener('pointerleave', () => {
  const image = coverBook.querySelector('.cover-image');
  if (!image) return;
  image.style.setProperty('--cover-rotate-x', '0deg');
  image.style.setProperty('--cover-rotate-y', '0deg');
});
coverBook.addEventListener('click', (event) => {
  const image = event.target.closest('.cover-image');
  if (!image) return;
  image.classList.remove('cover-tapped');
  void image.offsetWidth;
  image.classList.add('cover-tapped');
  window.setTimeout(() => image.classList.remove('cover-tapped'), 700);
});
