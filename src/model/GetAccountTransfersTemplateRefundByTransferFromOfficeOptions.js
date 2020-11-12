

import ApiClient from '../ApiClient';

/**
 * The GetAccountTransfersTemplateRefundByTransferFromOfficeOptions model module.
 * @module model/GetAccountTransfersTemplateRefundByTransferFromOfficeOptions
 * @version 1.0
 */
class GetAccountTransfersTemplateRefundByTransferFromOfficeOptions {
    /**
     * Constructs a new <code>GetAccountTransfersTemplateRefundByTransferFromOfficeOptions</code>.
     * @alias module:model/GetAccountTransfersTemplateRefundByTransferFromOfficeOptions
     */
    constructor() { 
        
        GetAccountTransfersTemplateRefundByTransferFromOfficeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersTemplateRefundByTransferFromOfficeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersTemplateRefundByTransferFromOfficeOptions} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersTemplateRefundByTransferFromOfficeOptions} The populated <code>GetAccountTransfersTemplateRefundByTransferFromOfficeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersTemplateRefundByTransferFromOfficeOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('nameDecorated')) {
                obj['nameDecorated'] = ApiClient.convertToType(data['nameDecorated'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountTransfersTemplateRefundByTransferFromOfficeOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetAccountTransfersTemplateRefundByTransferFromOfficeOptions.prototype['name'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetAccountTransfersTemplateRefundByTransferFromOfficeOptions.prototype['nameDecorated'] = undefined;






export default GetAccountTransfersTemplateRefundByTransferFromOfficeOptions;

