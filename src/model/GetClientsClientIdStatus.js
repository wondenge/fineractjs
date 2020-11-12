

import ApiClient from '../ApiClient';

/**
 * The GetClientsClientIdStatus model module.
 * @module model/GetClientsClientIdStatus
 * @version 1.0
 */
class GetClientsClientIdStatus {
    /**
     * Constructs a new <code>GetClientsClientIdStatus</code>.
     * @alias module:model/GetClientsClientIdStatus
     */
    constructor() { 
        
        GetClientsClientIdStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsClientIdStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsClientIdStatus} obj Optional instance to populate.
     * @return {module:model/GetClientsClientIdStatus} The populated <code>GetClientsClientIdStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsClientIdStatus();

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
GetClientsClientIdStatus.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetClientsClientIdStatus.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetClientsClientIdStatus.prototype['description'] = undefined;






export default GetClientsClientIdStatus;

