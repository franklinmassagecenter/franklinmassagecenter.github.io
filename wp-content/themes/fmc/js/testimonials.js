$(function() {
    var fmc = [
        {
            text:
                "My husband and I have been going to Franklin Massage Center for a year now, and we love everyone!! They have a relaxing environment and can fix anything that's wrong. I stand all day and have severe back and shoulder pain. Franklin Massage Center has helped me so much in getting my muscles to relax. I love those girls!",
            author: 'Emily P.',
        },
        {
            text:
                'I have traveled the world and have had hundreds of massages over the past four decades, and none of them have come close to the level of massage that you receive at Franlin Massage Center!! I have a high stress corporate job that has me traveling several weeks a month, sleeping in different beds, and lugging bags through airports. It makes for a very tight neck and back. I have been getting massages by Robin for over four years and have now had massages by all of the other massage therapists. The thing I love most about this place is that no matter who I see for my massage, it is ALWAYS one if the best massages of my life!!! I recommend trying out all of the therapists because they all bring something different to the table (pun intended)!!!',
            author: 'Louis F.',
        },
        {
            text:
                'I have had tons of massages over the past 20 years and Franklin Massage Center is hands down the BEST!! I have seen Robin for nearly three years, and she is super awesome, but most of the time I call at the last minute to get in and she is usually booked. Now that there are so many therapists to choose from, I have had massages from Mandy, Dianna, and Nicole!! They even do 4 hand massages that will blow your mind (and hurt a tad bit). If you are looking for the absolute best sports massage in town, look no further! These girls know what they are doing!!!',
            author: 'Megan S.',
        },
        {
            text:
                "There are a few things to consider when being an athlete. First: find the best sports massage therapist in Nashville/Franklin area (I've given you that one). Second: remember what they taught you in yoga class about breathing. And lastly: apply the breathing technique while getting the best massage ever. OUTCOME? Stronger, better muscles!!!",
            author: 'Cristina Y.',
        },
        {
            text:
                "Robin, Dianna, and the team of massage therapists at Franklin Massage Center are the best you'll find ANYWHERE! I started getting massages when I was training for my first marathon in 2012, and I didn't know what I was missing. I continue to run/train regularly for endurance events and massage is part of my training regimen. Now I can't imagine my life without it! Whether you're looking for all-over deep tissue massage, trigger point massage, or everything in between, you definitely need to check out Franklin Massage Center! You will not be disappointed!!!",
            author: 'Jessica M.',
        },
        {
            text:
                'Definitely worth upgrading to the 90 min massage!! More time to work out problem areas!',
            author: 'Bob W.',
        },
        {
            text:
                "This is the absolute BEST group of massage therapists in the entire Nashville area. Hands down! I have seen every therapist there and wouldn't hesitate to recommend any of them. The best of the best!",
            author: 'Stephanie S.',
        },
        {
            text:
                'I cannot say enough good things about Franklin Massage and the people that work there. They are incredibly professional and skilled and have helped me through many running aches and pains so I can keep at it!! They also care tremendously and it shows by the loyal client base they have!! I recommend Franklin Massage to all my friends...runners and non-runners alike!!',
            author: 'Corrie A.',
        },
        {
            text:
                'This is hands down the best place for a massage in the greater Nashville area. The therapists take time to understand your pain points (or stress levels ha!) and I would highly recommend any member of the team. I love that they specialize in massage therapy and they really take the time to cater the massage each visit. Love, love, love this place and love the entire team!',
            author: 'Susan R.',
        },
        {
            text:
                'This place is incredible. I am a figure competitor and workout 5 days a week. With that being said, my body needs all the recovery it can get to sustain the workouts I do. This place has helped with that tremendously. From the massage work to the cupping work they offer. The staff is awesome! Super friendly and engaging. Prices are very affordable as well. I would recommend this place to anyone.',
            author: 'Laura M.',
        },
        {
            text:
                "I've been going to Franklin Massage for years! I love it here. Everyone is super nice and professional. They specialize in deep tissue massage and have different levels of pressure to fit your therapeutic needs. They have saved my neck more than once!",
            author: 'Emily H.',
        },
        {
            text:
                "As a runner, I rely on massage therapy to actually assist in my race and recovery process. This is not an extravagance. The therapists take their work seriously and they do a fantastic job. I've received massages at other places before, but I won't go anywhere else now.",
            author: 'Lee Ann F.',
        },
        {
            text:
                "Love love love. I have had massages everywhere and can say that they are the BEST. Since I get massages for therapeutic reasons I look for therapists that know what they're doing. They definitely do. The center is clean, calm, the staff is friendly and professional. I also appreciate that all they do is massage therapy and they don't combine it with pedicures and facials.",
            author: 'Leanne R.',
        },
        {
            text:
                "FMC is incredible! All the therapists are amazing and do phenomenal work. Last time I went they did a combination of deep tissue massage and cupping to release the tension in my back! Can't wait to go back for my next massage! I survived the elbow!!",
            author: 'Reagan S.',
        },
        {
            text:
                'I have been a client of FMC for almost 7 years now and could not speak any more highly of a massage establishment!! Robin has done a great job at finding therapists that truly love their job and it shows!! They definitely are the deepest therapists around and are not scared to use their elbows!! Each therapist has a different style but they are all AMAZING!! And, if you have never tried upping, YOU SHOULD!!!',
            author: 'Patty',
        },
        {
            text:
                'Great experience, friendly staff! Being involved in crossfit demands that you take care of your body and deep tissue massage is a great way to do so. Robin, Nicole, and Katie take great care of their clients. Highly recommended!',
            author: 'Bradley M.',
        },
        {
            text:
                'I love Franklin Massage. They take care of all of my aches and pains brought on by running and have been a life saver while training for my first marathon. This is absolutely the best sports massage in town!',
            author: 'Ashley R.',
        },
    ];
    var robin = [
        {
            text:
                'Robin is one of the rare therapists that combines strong, deep work with a innate sense of what my body needs at each session. She is very talented and also very trustworthy and dependable!',
            author: 'Michael S.',
        },
        {
            text:
                "I can't say enough good things about Robin, Mandy (the two I've had massages from), and EVERYONE at Franklin Massage Center! I've NEVER had anyone I've referred say they were not 110% satisfied!!!",
            author: 'Cristina Y.',
        },
        {
            text:
                "As a marathoner who is always in training mode, I was thrilled to discover the Franklin Massage Center! Robin is experienced in working specifically with athletes who abuse their bodies, and are skilled at providing a purposeful massage. When I was training for the Boston Marathon this spring, I saw Robin weekly for deep tissue work, targeting trouble areas, which contributed to a fabulous marathon experience. The Franklin Massage Center has supported Fleet Feet Sports' training programs which participant discounts, and have worked their magic at our annual Dude Night event. Thank you, Robin!!",
            author: 'Tammy Sanders',
            authorTitle: 'RRCA Certified Coach',
            authorLink: {
                link: 'http://www.fleetfeetnashville.com/',
                text: 'Fleet Feet Nashville',
            },
        },
        {
            text:
                'I have had massages all over the world and Robin has been the first therapist that was deep enough and that I actually felt like she knew exactly what she was doing.',
            author: 'Stephanie S.',
        },
        {
            text:
                'Robin is fantastic. She is very intuitive and seems to know exactly how to work the knots out of my shoulders. I always feel great after she works on me.',
            author: 'Angela S.',
        },
        {
            text:
                'I have always had headaches and thought that they were just apart of life...until I started getting massages regularly from Robin. The heads went away and I started sleeping thought the night. Great massage!!!',
            author: 'Brenda T.',
        },
        {
            text:
                'Robin is the first massage therapist that I have had that incorporates stretching into her normal massage. She is great at stripping the muscles and relieving headaches and lower back pain. I was in a car wreck 5 years ago and this past few months has been the best I have felt in years!',
            author: 'Susan G.',
        },
        {
            text:
                'I have suffered for years from lower back and sciatic problems with not much relief, after a few sessions with Robin it has almost totally gone away. I am back running, golfing, and playing ice hockey again. Hands down the best massage I have found after being in Nashville for 15 years!!',
            author: 'Scott P.',
        },
        {
            text:
                "I love running but my body has made it clear that it would prefer a less demanding sport. When I started training for full marathons, I incorporated regular deep tissue massages with Robin into my training plan. Robin understands the runner's body, and uses her knowledge, skill, and experience to effectively reduce pain and optimize healing. At her suggestion, I have also introduced trigger point massage with Dianna to address chronic low back issues. The two techniques complement each other and are providing lasting pain relief and allowing me to train more effectively. Good running shoes and Franklin Massage Center: priceless!",
            author: 'Susan L.',
        },
        {
            text:
                "I just finished 8 months of Ironman training, complete with 2 workouts a day, 6 days a week. Throughout my training, I had a standing appointment with Robin at Franklin Massage Center which contributed to my quick recovery and no injuries during this intense training period. Thank you Robin for your expertise and encouragement! I finished my Ironman distance in Naples Florida last Saturday, and feel great! Also, thank you for miraculously fixing the pain in my right foot during my post event appointment. You're the greatest!!!",
            author: 'Mark B.',
        },
        {
            text:
                'I have been going to visit Robin at Franklin massage center for around two years now and wanted to write a review. I have some cervical disc issues and also was experiencing severe pain because of arthritis in my hip and therefore have been visiting masseuses consistently for the last 10 years. Robin is the best I have visited. She plans her massage around my specific issues and even explores different techniques to try to make her massage more beneficial to me specifically. Robin is always welcoming and concerned about my needs. She is open to my request for different pressure when I am just not up to a very deep tissue massage that day. From her welcoming hello, her choice of music, the relaxing atmosphere in her studio and the massage itself, I always feel that I am of upmost importance to Robin when I enter her massage studio.',
            author: 'Mary P.',
        },
        {
            text:
                "I'm the owner of a fitness studio and send ALL my clients to Franklin Massage! Robin is the best in town, hands down. If you're looking for a REAL massage that helps relieve sore muscles, works out knots, stress, tension, and also some fantastic cupping, this is your place! If you want more than a fluffy massage, with that hurts-so-good feeling, you've found the right place. Robin keeps me going!",
            author: 'Suzanne B.',
        },
    ];

    var nicole = [
        {
            text:
                'Nicole is a very gifted massage therapist. I had issues with my back and received massages weekly while I was going through physical therapy, and it helped release the tension in my back, shoulders, and neck. Nicole helped me with soreness in my arms that was also part of the tension. She spent 90 minutes on my arms and legs one day and they felt great afterwards! I had several 90 minute massages where she focused on my back and used pressure points, and it was very helpful. She also gives great full body massages for stress. 90 minutes is the only way to get a massage!',
            author: 'Amy P.',
        },
        {
            text:
                'I have found Nicole to be an excellent massage therapist. She is the best for deep tissue massage that I have ever experienced. She is very professional in her approach and listens carefully when she inquires about problem areas that require attention. Exercise is an important part of my life, and the deep tissue massages from Nicole allow me to press ahead with more effort and energy than before in my exercise routine.',
            author: 'Don Z.',
        },
        {
            text:
                'For the past year now I have been getting a massage twice a month for tension related to work, desk setup, and stress. I have seen Mandy, Nicole, and Stephanie at one point or another and I could not be happier with any of the treatments I received. They treat my tension seriously and supplement it with wonderful stretch exercises that I have been able to practice on my own to alleviate stress. The environment is friendly, and I feel as though they are not only my massage therapists but also my friends as well. This relationship is established seamlessly, without sacrifice to their professional rapport. I simply cannot say enough wonderful things about Franklin Massage Center and the relief I have found there!',
            author: 'Betsy T.',
        },
        {
            text: 'I started going to FMC over a year ago for my MS chronic pain. The new location is a very serene and relaxing environment. The manager Katie is always friendly and helpful. My therapist, Nicole, is the best and with my chronic pain I have to have frequent massages. Nicole is very accommodating and professional. She always listens to my areas of concern, adjusting the treatment and pressure when needed. I leave feeling like a new and improved version of myself and am always a satisfied customer!!',
            author: 'Melanie M.'
        }
    ];

    var kathryn = [
        {
            text:
                'I love Franklin Massage Center! I have seen several of the therapists there and they are all wonderful. As a runner, and now soon-to-be mom, I have benefited greatly from their variety of services. I saw Kathryn several times during and after training for a 50K and am a firm believer that this kept me away from injury during that process. Now I see her for pre-natal massage to keep me (and baby!) comfortable. Prices are very reasonable and the customer service is always great. If you need a massage I would highly recommend them!',
            author: 'Chelsea A.',
        },
        {
            text: 'Professional and knowledgeable. Kathryn is great!',
            author: 'Tanya Y.',
        },
        {
            text:
                'I love Franklin Massage! I have been seeing Kathryn and she is amazing! As an Aesthetician, I am often contorting my body while hovering over clients, therefore my back and neck are always a wreck and in desperate need of a massage. I have also been getting Cupping Therapy during my sessions. It is amazing and takes relief to another level. If you are looking for a massage with results then you must visit Franklin Massage! If you are looking for a fluffy relaxing massage then you may be a little surprised as they are a deep pressure results oriented group of massage therapists that will change your life. That being said, I\'m sure you could always ask for lighter pressure.',
            author: 'Libby S.',
        },
        {
            text: 'Franklin Massage really is a cut above the rest. Their staff members and massage therapists are extremely knowledgeable and excellent at what they do. I suffer from a lot of lower back and neck pain, and I always feel considerably better after a visit with Kathryn. If you are in need of a deep tissue massage to relieve pain/stiffness or just a relaxing massage I would highly recommend FMC.',
            author: 'Cory S.'
        },
        {
            text: 'Kathryn is the best. I\'ve been seeing her for over two years, and she keeps my body ready to run all of the races. Bonus points for being able to get cupping done as well.',
            author: 'Cresant M.'
        }
    ];

    var mallory = [
        {
            text: 'Mallory is incredible! I like lighter pressure and she is great at adapting to needs and preferences. She\'s quiet too which I love and her music is relaxing and groovy. She is really helping keep me in good running shape. Highest recommendation!',
            author: 'Cheryl B.'
        },
        {
            text: 'Mallory was my go to therapist for the year that I lived in Franklin. I\'ve had massages all over the country. In high-end spas and inexpensive Chinese foot massage joints. From Minneapolis to Orange County. On average I get 1-2 massages a month when my schedule allows. Mallory is one of the best I\'ve been to. She listens to her clients\' needs and is responsive. I gave her some serious knots over the course of the last year. She was always up for the challenge and I knew I\'d feel like a million bucks afterward. Go see her. You\'ll thank me!!',
            author: 'Jennifer S.'
        },
        {
            text: 'Had my first massage with Mallory. She was fantastic, therapeutic, and relaxing! Easy communication with front desk staff and even followed up after massage to see how I was doing. Would highly recommend and will definitely be back!',
            author: 'Lauren H.'
        }
    ];

    var bethanie = [
        {
            text: 'This is the absolute BEST group of massage therapists in the entire Nashville area. Hands down! Thank you Bethanie for the amazing massage. The best of the best...',
            author: 'Stephanie S.'
        }
    ];

    var maxLength = Math.max(
        fmc.length,
        robin.length,
        nicole.length,
        kathryn.length,

        mallory.length,
        bethanie.length,
    );

    for (var i = 0; i < maxLength; i++) {
        var tests = $('#testimonials');
        if (i < fmc.length) {
            tests.append(createTestimonial(fmc[i]));
        }

        if (i < robin.length) {
            tests.append(createTestimonial(robin[i]));
        }

        if (i < nicole.length) {
            tests.append(createTestimonial(nicole[i]));
        }

        if (i < kathryn.length) {
            tests.append(createTestimonial(kathryn[i]));
        }

        if (i < mallory.length) {
            tests.append(createTestimonial(mallory[i]));
        }

        if (i < bethanie.length) {
            tests.append(createTestimonial(bethanie[i]));
        }
    }
});

function createTestimonial(test) {
    var t = $(
        '<div class="testimonial"><div class="testimonial-text">' +
            test.text +
            '</div><div class="testimonial-author">- ' +
            test.author +
            '</div></div>'
    );

    if (test.authorTitle) {
        t.append(
            '<div class="testimonial-author">' +
                test.authorTitle +
                '</div></div>'
        );
    }

    if (test.authorLink) {
        t.append(
            '<div class="testimonial-author"><a target="_blank" href="' +
                test.authorLink.link +
                '">' +
                test.authorLink.text +
                '</a></div></div>'
        );
    }

    return t;
}
