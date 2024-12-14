import React from 'react';

const PatPage: React.FC = () => {
    return (
        <div className="p-4 md:p-8 lg:p-12">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-4">PAT Testing</h1>
            <p className="text-lg mb-4">
                Portable appliance testing (PAT) is the term used to describe the examination of electrical appliances and equipment to ensure they are safe to use.
            </p>

            {/* Include the remaining contents as necessary */}

            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold my-4">Useful resources</h2>
            {/* Include the list of resources here */}

            <p className="text-lg my-4">
                The cost of PAT testing is dependent on the number of items that need to be tested. For a quote, please call now on 078 2544 7057 or 020 3662 3589 or email hello@electricjames.com.
            </p>

            <p className="text-lg">
                Also see Electrical Safety Testing and Reporting under Electric James services.
            </p>
        </div>
    );
};

export default PatPage;