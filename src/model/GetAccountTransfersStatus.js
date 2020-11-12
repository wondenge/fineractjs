

import ApiClient from '../ApiClient';

/**
 * The GetAccountTransfersStatus model module.
 * @module model/GetAccountTransfersStatus
 * @version 1.0
 */
class GetAccountTransfersStatus {
    /**
     * Constructs a new <code>GetAccountTransfersStatus</code>.
     * @alias module:model/GetAccountTransfersStatus
     */
    constructor() { 
        
        GetAccountTransfersStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersStatus} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersStatus} The populated <code>GetAccountTransfersStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersStatus();

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
GetAccountTransfersStatus.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetAccountTransfersStatus.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetAccountTransfersStatus.prototype['description'] = undefined;






export default GetAccountTransfersStatus;

