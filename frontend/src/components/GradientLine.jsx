const GradientLine = () => {
    return (
      <div 
        style={{ 
          width: '100%', 
          height: '4px', // Adjust the height of the line as needed
          backgroundImage: 'linear-gradient(to right, hsla(265, 100%, 50%, 0.7), hsla(265, 100%, 50%, 0))'
        }} 
      />
    );
  };
  
  export default GradientLine;
  