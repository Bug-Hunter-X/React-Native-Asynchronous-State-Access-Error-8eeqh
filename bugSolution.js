```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <View>
      <Text>{data?.name || 'Loading...'}</Text> {/* Use optional chaining and nullish coalescing */}
    </View>
  );
};

```

This solution uses the optional chaining operator (`?.`) to safely access the `name` property of `data` only if `data` is not `null` or `undefined`. The nullish coalescing operator (`||`) provides a default value ('Loading...') if `data?.name` is nullish.