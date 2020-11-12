

import ApiClient from '../ApiClient';

/**
 * The GetLoanPaymentType model module.
 * @module model/GetLoanPaymentType
 * @version 1.0
 */
class GetLoanPaymentType {
    /**
     * Constructs a new <code>GetLoanPaymentType</code>.
     * @alias module:model/GetLoanPaymentType
     */
    constructor() { 
        
        GetLoanPaymentType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanPaymentType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanPaymentType} obj Optional instance to populate.
     * @return {module:model/GetLoanPaymentType} The populated <code>GetLoanPaymentType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanPaymentType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoanPaymentType.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanPaymentType.prototype['name'] = undefined;






export default GetLoanPaymentType;

