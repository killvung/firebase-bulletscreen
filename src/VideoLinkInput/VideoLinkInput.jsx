import React, { forwardRef } from 'react';
import { Input } from 'semantic-ui-react'

export default forwardRef(({ handleInputGenerateClick }, ref) => (
    <Input
        ref={ref}
        value={'https://www.youtube.com/watch?v=D0nEDS6wd-w'}
        action={{ content: 'Generate', onClick: handleInputGenerateClick }}
    />
));
