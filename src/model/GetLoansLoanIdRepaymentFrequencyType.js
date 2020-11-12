

import ApiClient from '../ApiClient';

/**
 * The GetLoansLoanIdRepaymentFrequencyType model module.
 * @module model/GetLoansLoanIdRepaymentFrequencyType
 * @version 1.0
 */
class GetLoansLoanIdRepaymentFrequencyType {
    /**
     * Constructs a new <code>GetLoansLoanIdRepaymentFrequencyType</code>.
     * @alias module:model/GetLoansLoanIdRepaymentFrequencyType
     */
    constructor() { 
        
        GetLoansLoanIdRepaymentFrequencyType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdRepaymentFrequencyType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdRepaymentFrequencyType} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdRepaymentFrequencyType} The populated <code>GetLoansLoanIdRepaymentFrequencyType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdRepaymentFrequencyType();

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
GetLoansLoanIdRepaymentFrequencyType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoansLoanIdRepaymentFrequencyType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoansLoanIdRepaymentFrequencyType.prototype['description'] = undefined;






export default GetLoansLoanIdRepaymentFrequencyType;

