

import ApiClient from '../ApiClient';

/**
 * The GetAccountTransfersFromClientOptions model module.
 * @module model/GetAccountTransfersFromClientOptions
 * @version 1.0
 */
class GetAccountTransfersFromClientOptions {
    /**
     * Constructs a new <code>GetAccountTransfersFromClientOptions</code>.
     * @alias module:model/GetAccountTransfersFromClientOptions
     */
    constructor() { 
        
        GetAccountTransfersFromClientOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersFromClientOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersFromClientOptions} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersFromClientOptions} The populated <code>GetAccountTransfersFromClientOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersFromClientOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountTransfersFromClientOptions.prototype['id'] = undefined;

/**
 * @member {String} displayName
 */
GetAccountTransfersFromClientOptions.prototype['displayName'] = undefined;

/**
 * @member {Number} officeId
 */
GetAccountTransfersFromClientOptions.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetAccountTransfersFromClientOptions.prototype['officeName'] = undefined;






export default GetAccountTransfersFromClientOptions;

