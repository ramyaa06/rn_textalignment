import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TextAlignmentExample = () => {
const [alignment, setAlignment] = useState('center');

const changeAlignment = (newAlignment) => {
setAlignment(newAlignment);
};

return (
<View >
<Text style={[ {textAlign: alignment} ]}>
Thi
</Text >
<View >
<Button
title="Left Align"
onPress={() => changeAlignment('left')}
/>
<Button
title="Center Align"
onPress={() => changeAlignment('center')}
/>
<Button
title="Right Align"
onPress={() => changeAlignment('right')}
/>
</View>
</View>
);
};

export default TextAlignmentExample;
