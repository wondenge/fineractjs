

import ApiClient from '../ApiClient';

/**
 * The GetAccountTransfersPageItemsFromOffice model module.
 * @module model/GetAccountTransfersPageItemsFromOffice
 * @version 1.0
 */
class GetAccountTransfersPageItemsFromOffice {
    /**
     * Constructs a new <code>GetAccountTransfersPageItemsFromOffice</code>.
     * @alias module:model/GetAccountTransfersPageItemsFromOffice
     */
    constructor() { 
        
        GetAccountTransfersPageItemsFromOffice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersPageItemsFromOffice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersPageItemsFromOffice} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersPageItemsFromOffice} The populated <code>GetAccountTransfersPageItemsFromOffice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersPageItemsFromOffice();

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
GetAccountTransfersPageItemsFromOffice.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetAccountTransfersPageItemsFromOffice.prototype['name'] = undefined;






export default GetAccountTransfersPageItemsFromOffice;

