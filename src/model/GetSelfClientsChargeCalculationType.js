

import ApiClient from '../ApiClient';

/**
 * The GetSelfClientsChargeCalculationType model module.
 * @module model/GetSelfClientsChargeCalculationType
 * @version 1.0
 */
class GetSelfClientsChargeCalculationType {
    /**
     * Constructs a new <code>GetSelfClientsChargeCalculationType</code>.
     * @alias module:model/GetSelfClientsChargeCalculationType
     */
    constructor() { 
        
        GetSelfClientsChargeCalculationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsChargeCalculationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsChargeCalculationType} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsChargeCalculationType} The populated <code>GetSelfClientsChargeCalculationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsChargeCalculationType();

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
GetSelfClientsChargeCalculationType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSelfClientsChargeCalculationType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSelfClientsChargeCalculationType.prototype['description'] = undefined;






export default GetSelfClientsChargeCalculationType;

