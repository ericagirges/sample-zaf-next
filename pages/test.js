import { useState, useEffect } from 'react';
import { useZafClient } from '../utils/zafClient';
import settings from './api/settings';

export async function getServerSideProps({ query }) {
    console.log('query params', query);
  
    return {
      props: {},
    };
  }

export default function Test() {
    const client = useZafClient()

    const getTickets = event => {
        event.preventDefault();
        client.request(settings).then(function (data) {
            console.log("ALL TICKETS: ", data)
        })
    }

    return (
        <div>
            <h2>Hello!</h2>
            {/* <button onClick={getTickets()}>Click me!</button> */}
        </div>
    )
}