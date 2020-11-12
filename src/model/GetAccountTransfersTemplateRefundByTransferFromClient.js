

import ApiClient from '../ApiClient';
import GetAccountTransfersStatus from './GetAccountTransfersStatus';
import GetAccountTransfersTimeline from './GetAccountTransfersTimeline';

/**
 * The GetAccountTransfersTemplateRefundByTransferFromClient model module.
 * @module model/GetAccountTransfersTemplateRefundByTransferFromClient
 * @version 1.0
 */
class GetAccountTransfersTemplateRefundByTransferFromClient {
    /**
     * Constructs a new <code>GetAccountTransfersTemplateRefundByTransferFromClient</code>.
     * @alias module:model/GetAccountTransfersTemplateRefundByTransferFromClient
     */
    constructor() { 
        
        GetAccountTransfersTemplateRefundByTransferFromClient.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersTemplateRefundByTransferFromClient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersTemplateRefundByTransferFromClient} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersTemplateRefundByTransferFromClient} The populated <code>GetAccountTransfersTemplateRefundByTransferFromClient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersTemplateRefundByTransferFromClient();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GetAccountTransfersStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
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
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], Object);
            }
            if (data.hasOwnProperty('clientType')) {
                obj['clientType'] = ApiClient.convertToType(data['clientType'], Object);
            }
            if (data.hasOwnProperty('clientClassification')) {
                obj['clientClassification'] = ApiClient.convertToType(data['clientClassification'], Object);
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = GetAccountTransfersTimeline.constructFromObject(data['timeline']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountTransfersTemplateRefundByTransferFromClient.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetAccountTransfersTemplateRefundByTransferFromClient.prototype['accountNo'] = undefined;

/**
 * @member {module:model/GetAccountTransfersStatus} status
 */
GetAccountTransfersTemplateRefundByTransferFromClient.prototype['status'] = undefined;

/**
 * @member {Boolean} active
 */
GetAccountTransfersTemplateRefundByTransferFromClient.prototype['active'] = undefined;

/**
 * @member {Date} activationDate
 */
GetAccountTransfersTemplateRefundByTransferFromClient.prototype['activationDate'] = undefined;

/**
 * @member {String} firstname
 */
GetAccountTransfersTemplateRefundByTransferFromClient.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
GetAccountTransfersTemplateRefundByTransferFromClient.prototype['lastname'] = undefined;

/**
 * @member {String} displayName
 */
GetAccountTransfersTemplateRefundByTransferFromClient.prototype['displayName'] = undefined;

/**
 * @member {Object} gender
 */
GetAccountTransfersTemplateRefundByTransferFromClient.prototype['gender'] = undefined;

/**
 * @member {Object} clientType
 */
GetAccountTransfersTemplateRefundByTransferFromClient.prototype['clientType'] = undefined;

/**
 * @member {Object} clientClassification
 */
GetAccountTransfersTemplateRefundByTransferFromClient.prototype['clientClassification'] = undefined;

/**
 * @member {Number} officeId
 */
GetAccountTransfersTemplateRefundByTransferFromClient.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetAccountTransfersTemplateRefundByTransferFromClient.prototype['officeName'] = undefined;

/**
 * @member {module:model/GetAccountTransfersTimeline} timeline
 */
GetAccountTransfersTemplateRefundByTransferFromClient.prototype['timeline'] = undefined;

/**
 * @member {Object} groups
 */
GetAccountTransfersTemplateRefundByTransferFromClient.prototype['groups'] = undefined;






export default GetAccountTransfersTemplateRefundByTransferFromClient;

