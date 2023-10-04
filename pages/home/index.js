import { Card } from 'components/card'
import { Hero } from 'components/hero'
import { Video } from 'components/video'
import { Layout } from 'layouts/default'
import Image from 'next/image'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import s from './home.module.scss'

export default function Home() {
  const jobsArr = [
    {
      image:
        'https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/braids_2021_hp_tile.1d8f177e32b689f51b29.png',
      text: 'BRAIDS',
    },

    {
      image:
        'https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/natural_hair_2021_hp_tile.e95360827ef13815210a.png',
      text: 'NATURAL HAIR',
    },

    {
      image:
        'https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/haircut_2021_hp_tile.429a033a2e17a9e06644.png',
      text: 'HAIRCUT',
    },

    {
      image:
        'https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/mens_haircut_2021_hp_tile.ec1c6afffd0129b6951b.png',
      text: `MEN'S HAIRCUT`,
    },

    {
      image:
        'https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/locs_2021_hp_tile.748ab4b28a172bd54da8.png',
      text: `LOCS`,
    },

    {
      image:
        'https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/silk_press_2021_hp_tile.c17afd339331e718f828.png',
      text: `SILK PRESS`,
    },

    {
      image:
        'https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/weaves_2021_hp_tile.b38d22a7d4864b3e3a27.png',
      text: `WEAVES`,
    },

    {
      image:
        'https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/eyelashes_2021_hp_tile.968a9a77d3e861882b87.png',
      text: `EYELASHES`,
    },

    {
      image:
        'https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/nails_2021_hp_tile.6f41dfbf91ad7a7d152b.png',
      text: `NAILS`,
    },

    {
      image:
        'https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/kids-haircuts.744c88154e8a3d37f16c.png',
      text: `KIDS`,
    },
  ]
  return (
    <Layout theme="light">
      <section className={s.content}>
        <Hero />

        <div className={s.find}>Find top pros by service</div>

        <div className={s.cardDiv}>
          {jobsArr.map((jobs, index) => (
            <Card key={index} job={jobs} />
          ))}
        </div>

        <div className={s.find}>Meet StyleSeat Pros</div>
        <div className={s.videoDiv}>
          <Video />
          <Video />
          <Video />
        </div>

        <div className={s.justify}>
          <div className={s.imageDiv}>
            <Image
              src={
                'https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/klarna_learn_more_d.7ea693a14863901ebf9b.png'
              }
              width={680}
              height={197}
              alt="image"
            />
          </div>

          <div className={s.imageDiv2}>
            <div className={s.left}>
              <h2>Better with friends!</h2>

              <p>
                Refer a friend and you'll both get 15% (up to $50) off when you
                book with a new pro.
              </p>

              <button>Share Now</button>
            </div>

            <div className={s.image}>
              <Image
                src={
                  'https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/booking-referrals.6090ab6643c7a6bf8272.png'
                }
                width={680}
                height={197}
                alt="image"
              />
            </div>
          </div>

          <div className={s.credits}>
            <span>As Seen In</span>

            <div>
              <Image
                src={
                  'https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/forbes.f2b00096bb152b48ab10.png'
                }
                width={95}
                height={37}
                alt="image"
              />
            </div>

            <div>
              <Image
                src={
                  'https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/WWD.9ddd1be4c7f08505896d.png'
                }
                width={95}
                height={37}
                alt="image"
              />
            </div>

            <div>
              <Image
                src={
                  'https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/fortune.299f402eb623f259b942.png'
                }
                width={95}
                height={37}
                alt="image"
              />
            </div>

            <div>
              <Image
                src={
                  'https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/wsj.6c302cbf438a50146fb0.png'
                }
                width={95}
                height={37}
                alt="image"
              />
            </div>
          </div>
        </div>

        <div className={s.find}>Browse popular hair services</div>

        <div className={s.accordionDiv}>
          <Accordion className={s.accordion}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      id: 'home',
    }, // will be passed to the page component as props
  }
}
