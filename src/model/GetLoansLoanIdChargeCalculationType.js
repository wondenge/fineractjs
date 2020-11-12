

import ApiClient from '../ApiClient';

/**
 * The GetLoansLoanIdChargeCalculationType model module.
 * @module model/GetLoansLoanIdChargeCalculationType
 * @version 1.0
 */
class GetLoansLoanIdChargeCalculationType {
    /**
     * Constructs a new <code>GetLoansLoanIdChargeCalculationType</code>.
     * @alias module:model/GetLoansLoanIdChargeCalculationType
     */
    constructor() { 
        
        GetLoansLoanIdChargeCalculationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdChargeCalculationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdChargeCalculationType} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdChargeCalculationType} The populated <code>GetLoansLoanIdChargeCalculationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdChargeCalculationType();

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
GetLoansLoanIdChargeCalculationType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoansLoanIdChargeCalculationType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoansLoanIdChargeCalculationType.prototype['description'] = undefined;






export default GetLoansLoanIdChargeCalculationType;

