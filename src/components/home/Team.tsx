import * as React from 'react'
import Bubble from './Bubble'
import Company from './Company'
import { $v } from 'graphcool-styles'

export default function Team() {
  return (
    <section>
      <style jsx={true}>{`
        section {
          background-color: #fafafa;
        }
        .team {
          @p: .center;
          max-width: 1020px;
        }
        p {
          @p: .tc, .mt38;
        }
        .bubbles {
          @p: .mt60, .flex, .flexWrap;
        }
      `}</style>
      <div className="team">
        <h2>For the community by the community</h2>
        <p>
          How to GraphQL was created by Graphcool and many amazing contributors.
        </p>
        <div className="bubbles">
          <Bubble
            avatar={require('../../assets/graphics/contributors/brent.jpg')}
            name="Brent Vatne"
            description="Expo"
            x={0}
            y={0}
          />
          <Company
            src={require('../../assets/icons/companies/graphcool.svg')}
            color={$v.green}
            y={90}
          />
          <Bubble
            avatar={require('../../assets/graphics/contributors/radoslav.jpg')}
            name="Radoslav Stankov"
            description="graphql-ruby"
            x={0}
            y={-30}
          />
          <Bubble
            avatar={require('../../assets/graphics/contributors/ben.jpg')}
            name="Ben Wilson"
            description="graphql-elixir"
            x={0}
            y={60}
          />
          <Bubble
            avatar={require('../../assets/graphics/contributors/oleg.jpg')}
            name="Oleg Ilyenko"
            description="sangria"
            x={0}
            y={-30}
          />
          <Bubble
            avatar={require('../../assets/graphics/contributors/syrus.jpg')}
            name="Syrus Akbary "
            description="graphene"
            x={0}
            y={20}
          />

          <div style={{ marginTop: '40px', display: 'flex' }}>
            <Bubble
              avatar={require('../../assets/graphics/contributors/lee.jpg')}
              name="Lee Byron"
              description="Advisor"
              x={0}
              y={0}
            />
            <Bubble
              avatar={require('../../assets/graphics/contributors/nikolas.jpg')}
              name="Nikolas Burk"
              description="GraphQL Introduction, Relay, Apollo"
              x={0}
              y={50}
            />
            <Bubble
              avatar={require('../../assets/graphics/contributors/bruce.jpg')}
              name="Bruce Williams"
              description="graphql-elixir"
              x={0}
              y={-20}
            />
            <Company
              src={require('../../assets/icons/companies/expo.svg')}
              color="#0068B3"
              y={90}
            />
            <Bubble
              avatar={require('../../assets/graphics/contributors/maria.png')}
              name="Maria Bello"
              description="graphql.js"
              x={0}
              y={-30}
            />
            <Company
              src={require('../../assets/icons/companies/producthunt.svg')}
              color="#DA552F"
              y={30}
            />
          </div>

          <div style={{ marginTop: '40px', display: 'flex', marginLeft: 60 }}>
            <Company
              src={require('../../assets/icons/companies/facebook.svg')}
              color="#2D477E"
            />
            <Bubble
              avatar={require('../../assets/graphics/contributors/johannes.jpg')}
              name="Johannes Schickling"
              description="Organization"
              x={0}
              y={50}
              diameter={120}
            />
            <Bubble
              avatar={require('../../assets/graphics/contributors/tim.jpg')}
              name="Tim Suchanek"
              description="Website implementation"
              x={0}
              y={-40}
              diameter={120}
            />
            <Bubble
              avatar={require('../../assets/graphics/contributors/julian.png')}
              name="Julian Bauer"
              description="Design"
              x={0}
              y={40}
              diameter={120}
            />
            <Bubble
              avatar={require('../../assets/graphics/contributors/christian.jpg')}
              name="Christian Joudrey"
              description="Reviews & Feedback"
              x={30}
              y={-30}
              diameter={120}
            />
            <Bubble
              avatar={require('../../assets/graphics/contributors/abhi.jpg')}
              name="Abhi Aiyer"
              description="Videos"
              x={40}
              y={-20}
              diameter={120}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
