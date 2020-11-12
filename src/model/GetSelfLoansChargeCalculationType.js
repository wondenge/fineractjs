

import ApiClient from '../ApiClient';

/**
 * The GetSelfLoansChargeCalculationType model module.
 * @module model/GetSelfLoansChargeCalculationType
 * @version 1.0
 */
class GetSelfLoansChargeCalculationType {
    /**
     * Constructs a new <code>GetSelfLoansChargeCalculationType</code>.
     * @alias module:model/GetSelfLoansChargeCalculationType
     */
    constructor() { 
        
        GetSelfLoansChargeCalculationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfLoansChargeCalculationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfLoansChargeCalculationType} obj Optional instance to populate.
     * @return {module:model/GetSelfLoansChargeCalculationType} The populated <code>GetSelfLoansChargeCalculationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfLoansChargeCalculationType();

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
GetSelfLoansChargeCalculationType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSelfLoansChargeCalculationType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSelfLoansChargeCalculationType.prototype['description'] = undefined;






export default GetSelfLoansChargeCalculationType;

