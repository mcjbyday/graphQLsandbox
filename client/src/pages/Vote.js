import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import { getMatchup, createVote } from '../utils/api';
import { UPDATE_MATCH } from '../utils/mutations';
import { QUERY_MATCHES } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';

const Vote = () => {
  let { id } = useParams();
  
  const { loading, data } = useQuery(QUERY_MATCHES, {
      variables: { _id: id },
    });


  const matchup = data?.matches || [];
  
  const [createVote, { error } ] = useMutation(UPDATE_MATCH);

  // const [matchup, setMatchup] = useState({});

  // useEffect(() => {
  //   const getMatchupInfo = async () => {
  //     try {
  //       const res = await getMatchup(id);
  //       if (!res.ok) {
  //         throw new Error('No matchup');
  //       }
  //       const matchup = await res.json();
  //       setMatchup(matchup);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   getMatchupInfo();
  // }, [id]);

  const handleVote = async (techNum) => {
    try {
      await createVote({
        variables: { id: id, whichTech: techNum },
      });
      // const res = await createVote({ id, techNum });

      // if (!res.ok) {
      //   throw new Error('Could not vote');
      // }

      // const matchup = await res.json();
      // console.log(matchup);
      // setMatchup(matchup);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Here is the matchup!</h1>
      </div>
      <div className="card-body text-center mt-3">
        <h2>
          {matchup.tech1} vs. {matchup.tech2}
        </h2>
        <h3>
          {matchup.tech1_votes} : {matchup.tech2_votes}
        </h3>
        <button className="btn btn-info" onClick={() => handleVote(1)}>
          Vote for {matchup.tech1}
        </button>{' '}
        <button className="btn btn-info" onClick={() => handleVote(2)}>
          Vote for {matchup.tech2}
        </button>
        <div className="card-footer text-center m-3">
          <br></br>
          <Link to="/">
            <button className="btn btn-lg btn-danger">View all matchups</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vote;
