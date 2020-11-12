  

import ApiClient from '../ApiClient';

/**
 * The GetLoansLoanIdAmortizationType model module.
 * @module model/GetLoansLoanIdAmortizationType
 * @version 1.0
 */
class GetLoansLoanIdAmortizationType {
    /**
     * Constructs a new <code>GetLoansLoanIdAmortizationType</code>.
     * @alias module:model/GetLoansLoanIdAmortizationType
     */
    constructor() { 
        
        GetLoansLoanIdAmortizationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdAmortizationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdAmortizationType} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdAmortizationType} The populated <code>GetLoansLoanIdAmortizationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdAmortizationType();

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
GetLoansLoanIdAmortizationType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoansLoanIdAmortizationType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoansLoanIdAmortizationType.prototype['description'] = undefined;






export default GetLoansLoanIdAmortizationType;

