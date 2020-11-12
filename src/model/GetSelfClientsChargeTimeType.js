

import ApiClient from '../ApiClient';

/**
 * The GetSelfClientsChargeTimeType model module.
 * @module model/GetSelfClientsChargeTimeType
 * @version 1.0
 */
class GetSelfClientsChargeTimeType {
    /**
     * Constructs a new <code>GetSelfClientsChargeTimeType</code>.
     * @alias module:model/GetSelfClientsChargeTimeType
     */
    constructor() { 
        
        GetSelfClientsChargeTimeType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsChargeTimeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsChargeTimeType} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsChargeTimeType} The populated <code>GetSelfClientsChargeTimeType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsChargeTimeType();

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
GetSelfClientsChargeTimeType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSelfClientsChargeTimeType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSelfClientsChargeTimeType.prototype['description'] = undefined;






export default GetSelfClientsChargeTimeType;

