

import ApiClient from '../ApiClient';

/**
 * The GetLoansLoanIdInterestRateFrequencyType model module.
 * @module model/GetLoansLoanIdInterestRateFrequencyType
 * @version 1.0
 */
class GetLoansLoanIdInterestRateFrequencyType {
    /**
     * Constructs a new <code>GetLoansLoanIdInterestRateFrequencyType</code>.
     * @alias module:model/GetLoansLoanIdInterestRateFrequencyType
     */
    constructor() { 
        
        GetLoansLoanIdInterestRateFrequencyType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdInterestRateFrequencyType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdInterestRateFrequencyType} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdInterestRateFrequencyType} The populated <code>GetLoansLoanIdInterestRateFrequencyType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdInterestRateFrequencyType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoansLoanIdInterestRateFrequencyType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoansLoanIdInterestRateFrequencyType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoansLoanIdInterestRateFrequencyType.prototype['description'] = undefined;






export default GetLoansLoanIdInterestRateFrequencyType;

