

import ApiClient from '../ApiClient';

/**
 * The GetSelfClientsStatus model module.
 * @module model/GetSelfClientsStatus
 * @version 1.0
 */
class GetSelfClientsStatus {
    /**
     * Constructs a new <code>GetSelfClientsStatus</code>.
     * @alias module:model/GetSelfClientsStatus
     */
    constructor() { 
        
        GetSelfClientsStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsStatus} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsStatus} The populated <code>GetSelfClientsStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsStatus();

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
GetSelfClientsStatus.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSelfClientsStatus.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSelfClientsStatus.prototype['description'] = undefined;






export default GetSelfClientsStatus;

