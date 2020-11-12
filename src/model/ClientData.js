

import ApiClient from '../ApiClient';

/**
 * The ClientData model module.
 * @module model/ClientData
 * @version 1.0
 */
class ClientData {
    /**
     * Constructs a new <code>ClientData</code>.
     * @alias module:model/ClientData
     */
    constructor() { 
        
        ClientData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClientData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientData} obj Optional instance to populate.
     * @return {module:model/ClientData} The populated <code>ClientData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('activationDate')) {
                obj['activationDate'] = ApiClient.convertToType(data['activationDate'], 'Date');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('imageId')) {
                obj['imageId'] = ApiClient.convertToType(data['imageId'], 'Number');
            }
            if (data.hasOwnProperty('imagePresent')) {
                obj['imagePresent'] = ApiClient.convertToType(data['imagePresent'], 'Boolean');
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = ApiClient.convertToType(data['timeline'], Object);
            }
            if (data.hasOwnProperty('savingsAccountId')) {
                obj['savingsAccountId'] = ApiClient.convertToType(data['savingsAccountId'], 'Number');
            }
            if (data.hasOwnProperty('isAddressEnabled')) {
                obj['isAddressEnabled'] = ApiClient.convertToType(data['isAddressEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('rowIndex')) {
                obj['rowIndex'] = ApiClient.convertToType(data['rowIndex'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ClientData.prototype['id'] = undefined;

/**
 * @member {String} externalId
 */
ClientData.prototype['externalId'] = undefined;

/**
 * @member {Date} activationDate
 */
ClientData.prototype['activationDate'] = undefined;

/**
 * @member {String} firstname
 */
ClientData.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
ClientData.prototype['lastname'] = undefined;

/**
 * @member {String} officeName
 */
ClientData.prototype['officeName'] = undefined;

/**
 * @member {Number} imageId
 */
ClientData.prototype['imageId'] = undefined;

/**
 * @member {Boolean} imagePresent
 */
ClientData.prototype['imagePresent'] = undefined;

/**
 * @member {Object} timeline
 */
ClientData.prototype['timeline'] = undefined;

/**
 * @member {Number} savingsAccountId
 */
ClientData.prototype['savingsAccountId'] = undefined;

/**
 * @member {Boolean} isAddressEnabled
 */
ClientData.prototype['isAddressEnabled'] = undefined;

/**
 * @member {Number} rowIndex
 */
ClientData.prototype['rowIndex'] = undefined;






export default ClientData;

