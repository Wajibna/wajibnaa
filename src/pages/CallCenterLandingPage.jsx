import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  PhoneCall,
  Clock,
  Zap,
  Mail,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  ShieldCheck,
  BadgeCheck,
  MessageCircle,
  XCircle,
  CheckCircle

} from "lucide-react";
export default function CallCenterLandingPage() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [restaurantName, setRestaurantName] = useState('');
  const [isValidName, setIsValidName] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "962793630041";
  const message = "مرحباً، أريد الاستفسار عن خدماتكم";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const validateEmail = (input) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(re.test(input));
    setEmail(input);
  };

  const validatePhone = (input) => {
    const re = /^[0-9]{10}$/; // يتوقع 10 أرقام
    setIsValidPhone(re.test(input));
    setPhone(input);
  };
  const features = [
    {
      icon: Clock,
      title: "دعم 24/7",
      description: "فريقنا يعمل على مدار الساعة لخدمة زبائنك بدون توقف"
    },
    {
      icon: PhoneCall,
      title: "تقليل الضغط",
      description: "نريح موظفي مطعمك من الرد على المكالمات الكثيرة"
    },
    {
      icon: Zap,
      title: "سرعة الاستجابة",
      description: "نرد على المكالمات بسرعة ونُسجّل الطلبات بدقة"
    }
  ];
  const steps = [
    {
      title: "الزبون يتصل",
      description: "الزبون يتصل برقم مخصص لمطعمك الذي نزوده لك"
    },
    {
      title: "استقبال الطلب",
      description: "موظفنا المدرب يرد على المكالمة ويأخذ الطلب بكل احترافية"
    },
    {
      title: "إرسال الطلب",
      description: "يتم إرسال الطلب مباشرة للمطعم عبر الوسيلة التي تختارها"
    }
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [startCounting, setStartCounting] = useState(false);
  const [stats, setStats] = useState({
    restaurants: 0,
    monthlyOrders: 0,
    workingHours: 0,
    satisfaction: 0
  });
  const targetStats = {
    restaurants: 15,
    monthlyOrders: 1000,
    workingHours: 24,
    satisfaction: 98
  };
  useEffect(() => {
    // عند ظهور القسم في الشاشة، ابدأ العد
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
          setStats(targetStats); // تحديث القيم عند بدء العد
        }
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector('#stats-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  const faqs = [
    {
      question: "كم تكلفة الخدمة؟",
      answer: "التكلفة تعتمد على حجم مطعمك وعدد المكالمات المتوقعة. نقدم خططاً مرنة تناسب جميع المطاعم"
    },
    {
      question: "كيف يتم إرسال الطلبات لمطعمي؟",
      answer: "نستخدم النظام الذي تفضله: واتساب، إيميل، أو من خلال نظامنا الخاص الذي يتكامل مع نظامك"
    },
    {
      question: "هل يمكن تخصيص النصوص والترحيب؟",
      answer: "نعم بالتأكيد، نعمل معك على تخصيص نصوص الردود بما يتناسب مع هوية مطعمك"
    }
  ];
  const [reviews, setReviews] = useState([
    {
      id: 1,
      text: "خدمتهم خففت الضغط علينا كثير. صار في تركيز أكثر بالمطبخ.",
      restaurant: "مطعم الزاد الشامي"
    },
    {
      id: 2,
      text: "ما توقعت هالسرعة بالتعامل. شغلهم ممتاز.",
      restaurant: "مطعم لذة الطعم"
    },
    {
      id: 3,
      text: "تحسن ملحوظ في خدمة العملاء بعد التعامل معهم.",
      restaurant: "مطعم الذواقة"
    }
  ]);

  const [newReview, setNewReview] = useState({
    text: "",
    restaurant: ""
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.text && newReview.restaurant) {
      setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
      setNewReview({ text: "", restaurant: "" });
    }
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div className="font-sans text-gray-800">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </motion.div>
      
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* الشعار */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-xl md:text-2xl font-bold text-blue-700"
            >
              <img
                src="/logo.png"
                alt="شعار واجبنا"
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
              <span>Wajibna - واجبنا</span>
            </motion.div>

            {/* قائمة التنقل (للكمبيوتر) */}
            <div className="hidden md:flex gap-4">
              {[
                { name: 'المميزات', href: '#features' },
                { name: 'كيف نعمل', href: '#how-it-works' },
                { name: 'آراء العملاء', href: '#testimonials' },
                { name: 'اتصل بنا', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition hover:-translate-x-1 px-2 text-sm md:text-base"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* زر القائمة (للموبايل) */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* القائمة المنسدلة (للموبايل) */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white pb-4"
            >
              <div className="flex flex-col gap-3">
                {[
                  { name: 'المميزات', href: '#features' },
                  { name: 'كيف نعمل', href: '#how-it-works' },
                  { name: 'آراء العملاء', href: '#testimonials' },
                  { name: 'اتصل بنا', href: '#contact' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* قسم الهيرو */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 md:py-24 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
        >
          خدمة كول سنتر احترافية للمطاعم
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3 }} 
          className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 px-2"
        >
          نستقبل مكالماتك وطلبات زبائنك، وأنت ركّز على جودة الأكل!
        </motion.p>
        
        <motion.button
          onClick={() => {
            const contactSection = document.getElementById('contact');
            contactSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-700 font-bold px-6 py-2 md:px-8 md:py-3 rounded-full shadow-xl hover:bg-gray-100 transition"
        >
          اطلب الخدمة الآن
        </motion.button>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">من نحن؟</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          نحن شركة متخصصة في خدمات الكول سنتر للمطاعم. فريقنا مدرب على استقبال المكالمات بكفاءة واحترافية عالية، لضمان راحة زبائنك وزيادة مبيعاتك
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-20 px-6" id="features">
        <h2 className="text-4xl font-bold mb-12 text-center">مميزات خدمتنا</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-green-500 to-green-600 text-white py-12 px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          {/* العنوان المختصر */}
          <motion.h2
            className="md:text-2xl font-bold mb-4 text-center">
            ✨ عروضنا المميزة ✨
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-center"
          >
            رسائل واتساب بأسعار تنافسية
          </motion.h2>

          {/* العروض المدمجة */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              { messages: "رسالة 1000 ", price: "JD 10" },
              { messages: "رسالة 3000 ", price: "JD 20" },
              { messages: "رسالة 5000 ", price: "JD 30" },
            ].map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 p-4 rounded-lg border border-white/20 text-center"
              >
                <div className="text-xl font-bold">{offer.messages}</div>
                <div className="text-lg mt-2">{offer.price}</div>
                <div className="h-px bg-white/20 my-3"></div>
                <h4>أطلب الآن</h4>
                <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300"
        aria-label="تواصل معنا عبر واتساب"
      >
        
        <MessageCircle className="w-8 h-8" />
        
        {/* إشعار صغير (اختياري) */}
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
          1
        </span>
      </a>
              </motion.div>
            ))}
          </div>

          {/* وصف مختصر */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8 text-green-100"
          >
            <MessageCircle className="inline-block w-5 h-5 mr-2" />
            ! تواصل مع عملائك مباشرة وبكل سهولة
          </motion.p>
        </div>
      </section>
      {/* Stats Section */}
      <section id="stats-section" className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {/* مطاعم عملاء */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-4"
          >
            <div className="text-4xl font-bold mb-2">
              {startCounting && (
                <CountUp
                  start={0}
                  end={stats.restaurants}
                  duration={3}
                  separator=","
                />
              )}+
            </div>
            <div className="text-lg">مطعم عميل</div>
          </motion.div>

          {/* طلبات شهرية */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="p-4"
          >
            <div className="text-4xl font-bold mb-2">
              {startCounting && (
                <CountUp
                  start={0}
                  end={stats.monthlyOrders}
                  duration={3}
                  separator=","
                />
              )}+
            </div>
            <div className="text-lg">طلب شهرياً</div>
          </motion.div>

          {/* ساعات عمل */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="p-4"
          >
            <div className="text-4xl font-bold mb-2">
              {startCounting && (
                <CountUp
                  start={0}
                  end={stats.workingHours}
                  duration={3}
                />
              )}/7
            </div>
            <div className="text-lg">ساعة عمل</div>
          </motion.div>

          {/* رضا العملاء */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="p-4"
          >
            <div className="text-4xl font-bold mb-2">
              {startCounting && (
                <CountUp
                  start={0}
                  end={stats.satisfaction}
                  duration={3}
                  decimals={1}
                />
              )}%
            </div>
            <div className="text-lg">رضا العملاء</div>
          </motion.div>
        </div>
      </section>
      {/* How it Works */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center" id="how-it-works">
        <h2 className="text-4xl font-bold mb-10">كيف نعمل؟</h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`mb-8 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            >
              <div className="md:w-1/2 p-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4 md:mb-0">
                  <span className="text-blue-700 text-xl font-bold">{index + 1}</span>
                </div>
              </div>
              <div className="md:w-1/2 p-4 text-right">
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Contact Form */}
      <section className="py-20 px-6 bg-gray-50" id="contact">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2 bg-blue-700 text-white p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-right">تواصل معنا</h3>
                <p className="mb-6 text-right">نحن هنا لمساعدتك في تحسين خدمة العملاء لمطعمك</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <PhoneCall className="w-5 h-5 mr-2" />
                    <span>0793630041</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>info@wajIbnaa.com</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8 text-right">
                <form className="space-y-4 text-right">
                  <div className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md ">
                    <div className="space-y-2 ">
                      <label className=" items-center text-right text-gray-700 font-medium ">
                        اسم المطعم
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={restaurantName}
                          onChange={(e) => {
                            setRestaurantName(e.target.value);
                            setIsValidName(e.target.value.trim() !== '');
                          }}
                          className={`w-full p-3 border rounded-lg pl-10 ${restaurantName ? (isValidName ? 'border-green-500' : 'border-red-500') : 'border-gray-300 text-right'
                            }`}
                          placeholder="أدخل اسم المطعم"
                          required
                        />
                        {restaurantName && (
                          <span className="absolute right-3 top-3.5">
                            {isValidName ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-500" />
                            )}
                          </span>
                        )}
                      </div>
                      {restaurantName && !isValidName && (
                        <p className="text-red-500 text-sm">يجب إدخال اسم المطعم</p>
                      )}
                    </div>
                    {/* حقل الإيميل */}
                    <div className="space-y-2">
                      <label className="text-right items-center text-gray-700 font-medium">
                        البريد الإلكتروني
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => validateEmail(e.target.value)}
                          className={`w-full p-3 border rounded-lg pl-10 ${email ? (isValidEmail ? 'border-green-500' : 'border-red-500') : 'border-gray-300 text-right'
                            }`}
                          placeholder="example@domain.com"
                          required
                        />
                        {email && (
                          <span className="absolute right-3 top-3.5">
                            {isValidEmail ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-500" />
                            )}
                          </span>
                        )}
                      </div>
                      {email && !isValidEmail && (
                        <p className="text-red-500 text-sm">الرجاء إدخال بريد إلكتروني صحيح</p>
                      )}
                    </div>

                    {/* حقل رقم الهاتف */}
                    <div className="space-y-2">
                      <label className="text-right items-center text-gray-700 font-medium">
                        رقم الهاتف
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => validatePhone(e.target.value)}
                          className={`w-full p-3 border rounded-lg pl-10 ${phone ? (isValidPhone ? 'border-green-500' : 'border-red-500') : 'border-gray-300 text-right'
                            }`}
                          placeholder="07XXXXXXXX"
                          required
                        />
                        {phone && (
                          <span className="absolute right-3 top-3.5">
                            {isValidPhone ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-500" />
                            )}
                          </span>
                        )}
                      </div>
                      {phone && !isValidPhone && (
                        <p className="text-red-500 text-sm">الرجاء إدخال رقم هاتف صحيح (10 أرقام)</p>
                      )}
                    </div>

                    {/* زر الإرسال */}
                    <button
                      type="button"
                      disabled={!isValidEmail || !isValidPhone}
                      className={`w-full py-3 px-4 rounded-lg font-medium ${isValidEmail && isValidPhone
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        } transition-colors`}
                    >
                      إرسال البيانات
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto ">
          <h2 className="text-4xl font-bold mb-12 text-center">أسئلة شائعة</h2>
          <div className="space-y-4 ">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-xl overflow-hidden text-right"
              >
                <button
                  className="w-full flex flex-row-reverse justify-between items-center p-4 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium ml-3">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`}
                  />
                </button>
                <div className={`px-4 pb-4 ${activeIndex === index ? 'block' : 'hidden'}`}>
                  <p className="text-gray-700 text-right">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="md:flex md:justify-between md:items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Wajibna - واجبنا</h3>
              <p className="mb-4">حلول متكاملة لخدمة عملاء المطاعم</p>
              <div className="flex space-x-4 space-x-reverse">
                <a
                  href="https://www.facebook.com/share/1C6B8xBo4o/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/wajibnaa?igsh=eWX3bjI3bXo1bjhn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-300 transition">الرئيسية</a></li>
                  <li><a href="#features" className="hover:text-blue-300 transition">المميزات</a></li>
                  <li><a href="#how-it-works" className="hover:text-blue-300 transition">كيف نعمل</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">الخدمات</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-300 transition">استقبال الطلبات</a></li>
                  <li><a href="#" className="hover:text-blue-300 transition">حجوزات الطاولات</a></li>
                  <li><a href="#" className="hover:text-blue-300 transition">استطلاعات الرأي</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <PhoneCall className="w-4 h-4 mr-2" />
                    <span>0793630041</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>info@wajIbnaa.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} . جميع الحقوق محفوظة Wajibna - واجبنا</p>
          </div>
        </div>
      </footer>
    </div>
  );
}