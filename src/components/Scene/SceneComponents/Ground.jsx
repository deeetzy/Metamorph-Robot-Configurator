import { Grid } from '@react-three/drei';  


  const Ground = () => {
   return (
      <Grid
       position={[0, -0.01, 0]}
       args={[10.5, 10.5]}
       cellSize={0.3}
       cellThickness={1.5}
       cellColor={'#3f3f3f'}
       sectionSize={3}
       sectionThickness={1.5}
       sectionColor={'#213964'}
       fadeDistance={15}
       fadeStrength={2}
       followCamera={true} 
       infiniteGrid={true} 
      />
    );
  };


  export default Ground;



  
