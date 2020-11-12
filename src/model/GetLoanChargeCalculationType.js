

import ApiClient from '../ApiClient';

/**
 * The GetLoanChargeCalculationType model module.
 * @module model/GetLoanChargeCalculationType
 * @version 1.0
 */
class GetLoanChargeCalculationType {
    /**
     * Constructs a new <code>GetLoanChargeCalculationType</code>.
     * @alias module:model/GetLoanChargeCalculationType
     */
    constructor() { 
        
        GetLoanChargeCalculationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanChargeCalculationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanChargeCalculationType} obj Optional instance to populate.
     * @return {module:model/GetLoanChargeCalculationType} The populated <code>GetLoanChargeCalculationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanChargeCalculationType();

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
GetLoanChargeCalculationType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanChargeCalculationType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanChargeCalculationType.prototype['description'] = undefined;






export default GetLoanChargeCalculationType;

