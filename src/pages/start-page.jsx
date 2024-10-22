import React from 'react'
import StartLayout from '../layouts/start-layout'
import MainHeader from '../components/main-header'
import Paragraphs from '../components/paragraphs'
import SocialMedia from '../components/social-media'
import Events from '../components/events'

const paragraphs = [
    {
        "paragraph_id" : "1",
        "paragraph_header" : "Meetups",
        "paragraph_desc" : "On-site meetings for practitioners, enthusiasts, students, and companies that create AI solutions or want to implement them. 🗣️💡"
    },
    {
        "paragraph_id" : "2",
        "paragraph_header" : "Hands-On Workshops - <on-site/free>",
        "paragraph_desc" : "Targeted at everyone who wants to expand their skillset in the technologies offered in the workshops. 🛠️📚"
    },
    {
        "paragraph_id" : "3",
        "paragraph_header" : "Collaborative Projects",
        "paragraph_desc" : "Aimed at those who want to gain practical experience in Real World Data projects and those who feel the need to share knowledge or mentor newcomers. Students can work with practitioners to gain experience, while company practitioners can discover 'hidden gems'. Employers have the space to present their companies by delegating their engaged experts. 🌟🤝"
    }
]

const socials = [
    {
        "name": "Wrocław AI Team (WAIT)",
        "color": "bg-blue-500",
        "link": "https://www.linkedin.com/company/wait-wro/",
        "type": "LinkedIn",
        "followers": "1,000+ followers"
    },
    {
        "name": "Wrocław AI Team (WAIT)",
        "color": "bg-red-500",
        "link": "https://www.meetup.com/wait-wroclaw-ai-team/",
        "type": "Meetup.com",
        "followers": "1,500+ members"
    },
    {
        "name": "Wrocław AI Team (WAIT)",
        "color": "bg-stone-950",
        "link": "https://github.com/wait-wro",
        "type": "github.com",
        "followers": "10+ followers"
    },
    {
        "name": "Wrocław AI Team (WAIT)",
        "color": "bg-indigo-500",
        "link": "https://discord.gg/cJvgQZ6s",
        "type": "Discord",
        "followers": "500+ members"
    }
]

const incoming = {
    "cover" : "https://secure.meetupstatic.com/photos/event/2/d/e/2/600_524051746.webp?w=384",
    "date" : "29.10.2024",
    "title": "Accuracy 99,9% - dlaczego to porażka a nie sukces? Wpadki we wdrażaniu Machine learningu w Bioinformatyce | Zaczyna się od myśli… - pasywne interfejsy mózg komputer",
    "desc": "Już we wtorek 29 października o godzinie 18:30 spotkamy się po raz kolejny w ramach WAIT AI MEETUP #6 , ale tym razem w sali wykładowej 329 w budynku A1 na Politechnice Wrocławskiej. Wydarzenie organizujemy wspólnie z Kołem Naukowym BioMedical AI.",
    "tutors": [
        {
            "tutor_name": "Wiktoria @Biokoderka Wilman",
            "tutor_url": "https://www.linkedin.com/in/lukasz-biegaj/"
        },
        {
            "tutor_name": "Paweł Dzikiewicz",
            "tutor_url": "https://www.linkedin.com/in/maciej-zieba-04011598/"
        }
    ],
    "link_prez": "https://www.meetup.com/wait-wroclaw-ai-team/events/303995184/?eventOrigin=group_events_list"
}

const events = [
    {
        "cover": "https://secure.meetupstatic.com/photos/event/5/e/b/e/600_521304254.webp?w=384",
        "date" : "28.05.2024",
        "title": "Praktyczne wprowadzenie do AI i baz wektorowych",
        "tutors": [
            {
                "tutor_name": "Marcin Antas",
                "tutor_url": "https://www.linkedin.com/in/antasmarcin/"
            }
        ],
        "link_prez": "https://github.com/wait-wro/meetups/blob/main/meetups/001Meetup.md"
    },
    {
        "cover" : "https://secure.meetupstatic.com/photos/event/2/9/0/7/600_521650503.webp?w=384",
        "date" : "25.06.2024",
        "title": "Bielik od kuchni - jak powstaje polski model językowy w formule open-source/open-science",
        "tutors": [
            {
                "tutor_name": "Paweł Kiszczak",
                "tutor_url": "https://www.linkedin.com/in/paveu-kiszczak/"
            }
        ],
        "link_prez": "https://github.com/wait-wro/meetups/blob/main/meetups/002Meetup.md"
    },
    {
        "cover" : "https://secure.meetupstatic.com/photos/event/b/1/e/8/600_522225544.webp?w=384",
        "date" : "30.07.2024",
        "title": "Funkcja celu kontra biznes | Między matematyką a komputerami, teoria zderza się z praktyką",
        "tutors": [
            {
                "tutor_name": "Tomasz Melcer",
                "tutor_url": "#"
            },
            {
                "tutor_name": "Michał Gołębiewicz",
                "tutor_url": "#"
            }
        ],
        "link_prez": "https://www.linkedin.com/company/wait-wro/"
    },
    {
        "cover" : "https://secure.meetupstatic.com/photos/event/8/3/5/b/600_522693627.webp?w=384",
        "date" : "27.08.2024",
        "title": "Rozpoznawanie złóż metali i monitorowanie kopalń z kosmosu - Jak sztuczna inteligencja wspiera procesy biznesowe?",
        "tutors": [
            {
                "tutor_name": "dr Wojciech Kaczan",
                "tutor_url": "https://www.linkedin.com/in/wojciech-kaczan-phd-9667a0178/"
            },
            {
                "tutor_name": "Katarzyna Jabłońska",
                "tutor_url": "https://www.linkedin.com/in/kasia-jablonska/"
            }
        ],
        "link_prez": "https://github.com/wait-wro/meetups/blob/main/meetups/004Meetup.md"
    },
    {
        "cover" : "https://secure.meetupstatic.com/photos/event/3/6/1/6/600_523693846.webp?w=384",
        "date" : "27.08.2024",
        "title": "Function Calling w modelach językowych | Aktualne wyzwania związane z zastosowaniem generatywnej sztucznej inteligencji dla danych wizyjnych",
        "tutors": [
            {
                "tutor_name": "Łukasz Biegaj",
                "tutor_url": "https://www.linkedin.com/in/lukasz-biegaj/"
            },
            {
                "tutor_name": "Maciej Zięba",
                "tutor_url": "https://www.linkedin.com/in/maciej-zieba-04011598/"
            }
        ],
        "link_prez": "https://github.com/wait-wro/meetups/blob/main/meetups/005Meetup.md"
    }
]

export default function StartPage() {
    return (
        <StartLayout>
            <MainHeader/>
            <div id='about'><Paragraphs paragraphs={paragraphs}/></div>
            <div className="py-2"></div>
            <div id="events"><Events events={events} incoming={incoming}/></div>
            <div className="py-2"></div>
            <div id="join-us"><SocialMedia socials={socials}/></div>
        </StartLayout>
    )
}