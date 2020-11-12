

import ApiClient from '../ApiClient';

/**
 * The GetLoansLoanIdChargeTimeType model module.
 * @module model/GetLoansLoanIdChargeTimeType
 * @version 1.0
 */
class GetLoansLoanIdChargeTimeType {
    /**
     * Constructs a new <code>GetLoansLoanIdChargeTimeType</code>.
     * @alias module:model/GetLoansLoanIdChargeTimeType
     */
    constructor() { 
        
        GetLoansLoanIdChargeTimeType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdChargeTimeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdChargeTimeType} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdChargeTimeType} The populated <code>GetLoansLoanIdChargeTimeType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdChargeTimeType();

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
GetLoansLoanIdChargeTimeType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoansLoanIdChargeTimeType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoansLoanIdChargeTimeType.prototype['description'] = undefined;






export default GetLoansLoanIdChargeTimeType;

