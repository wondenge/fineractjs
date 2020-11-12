

import ApiClient from '../ApiClient';
import Group from './Group';
import Image from './Image';
import Office from './Office';
import Staff from './Staff';

/**
 * The Client model module.
 * @module model/Client
 * @version 1.0
 */
class Client {
    /**
     * Constructs a new <code>Client</code>.
     * @alias module:model/Client
     */
    constructor() { 
        
        Client.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Client</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Client} obj Optional instance to populate.
     * @return {module:model/Client} The populated <code>Client</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Client();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('office')) {
                obj['office'] = Office.constructFromObject(data['office']);
            }
            if (data.hasOwnProperty('transferToOffice')) {
                obj['transferToOffice'] = Office.constructFromObject(data['transferToOffice']);
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = Image.constructFromObject(data['image']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('middlename')) {
                obj['middlename'] = ApiClient.convertToType(data['middlename'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('mobileNo')) {
                obj['mobileNo'] = ApiClient.convertToType(data['mobileNo'], 'String');
            }
            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('staff')) {
                obj['staff'] = Staff.constructFromObject(data['staff']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [Group]);
            }
            if (data.hasOwnProperty('accountNumberRequiresAutoGeneration')) {
                obj['accountNumberRequiresAutoGeneration'] = ApiClient.convertToType(data['accountNumberRequiresAutoGeneration'], 'Boolean');
            }
            if (data.hasOwnProperty('closureDate')) {
                obj['closureDate'] = ApiClient.convertToType(data['closureDate'], 'Date');
            }
            if (data.hasOwnProperty('withdrawalDate')) {
                obj['withdrawalDate'] = ApiClient.convertToType(data['withdrawalDate'], 'Date');
            }
            if (data.hasOwnProperty('submittedOnDate')) {
                obj['submittedOnDate'] = ApiClient.convertToType(data['submittedOnDate'], 'Date');
            }
            if (data.hasOwnProperty('legalForm')) {
                obj['legalForm'] = ApiClient.convertToType(data['legalForm'], 'Number');
            }
            if (data.hasOwnProperty('reopenedDate')) {
                obj['reopenedDate'] = ApiClient.convertToType(data['reopenedDate'], 'Date');
            }
            if (data.hasOwnProperty('proposedTransferDate')) {
                obj['proposedTransferDate'] = ApiClient.convertToType(data['proposedTransferDate'], 'Date');
            }
            if (data.hasOwnProperty('rejected')) {
                obj['rejected'] = ApiClient.convertToType(data['rejected'], 'Boolean');
            }
            if (data.hasOwnProperty('pending')) {
                obj['pending'] = ApiClient.convertToType(data['pending'], 'Boolean');
            }
            if (data.hasOwnProperty('notActive')) {
                obj['notActive'] = ApiClient.convertToType(data['notActive'], 'Boolean');
            }
            if (data.hasOwnProperty('transferInProgress')) {
                obj['transferInProgress'] = ApiClient.convertToType(data['transferInProgress'], 'Boolean');
            }
            if (data.hasOwnProperty('transferOnHold')) {
                obj['transferOnHold'] = ApiClient.convertToType(data['transferOnHold'], 'Boolean');
            }
            if (data.hasOwnProperty('notPending')) {
                obj['notPending'] = ApiClient.convertToType(data['notPending'], 'Boolean');
            }
            if (data.hasOwnProperty('activationLocalDate')) {
                obj['activationLocalDate'] = ApiClient.convertToType(data['activationLocalDate'], 'Date');
            }
            if (data.hasOwnProperty('transferInProgressOrOnHold')) {
                obj['transferInProgressOrOnHold'] = ApiClient.convertToType(data['transferInProgressOrOnHold'], 'Boolean');
            }
            if (data.hasOwnProperty('officeJoiningLocalDate')) {
                obj['officeJoiningLocalDate'] = ApiClient.convertToType(data['officeJoiningLocalDate'], 'Date');
            }
            if (data.hasOwnProperty('withdrawn')) {
                obj['withdrawn'] = ApiClient.convertToType(data['withdrawn'], 'Boolean');
            }
            if (data.hasOwnProperty('notStaff')) {
                obj['notStaff'] = ApiClient.convertToType(data['notStaff'], 'Boolean');
            }
            if (data.hasOwnProperty('rejectedDate')) {
                obj['rejectedDate'] = ApiClient.convertToType(data['rejectedDate'], 'Date');
            }
            if (data.hasOwnProperty('closed')) {
                obj['closed'] = ApiClient.convertToType(data['closed'], 'Boolean');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Client.prototype['id'] = undefined;

/**
 * @member {module:model/Office} office
 */
Client.prototype['office'] = undefined;

/**
 * @member {module:model/Office} transferToOffice
 */
Client.prototype['transferToOffice'] = undefined;

/**
 * @member {module:model/Image} image
 */
Client.prototype['image'] = undefined;

/**
 * @member {Number} status
 */
Client.prototype['status'] = undefined;

/**
 * @member {String} firstname
 */
Client.prototype['firstname'] = undefined;

/**
 * @member {String} middlename
 */
Client.prototype['middlename'] = undefined;

/**
 * @member {String} lastname
 */
Client.prototype['lastname'] = undefined;

/**
 * @member {String} displayName
 */
Client.prototype['displayName'] = undefined;

/**
 * @member {String} mobileNo
 */
Client.prototype['mobileNo'] = undefined;

/**
 * @member {String} emailAddress
 */
Client.prototype['emailAddress'] = undefined;

/**
 * @member {String} externalId
 */
Client.prototype['externalId'] = undefined;

/**
 * @member {module:model/Staff} staff
 */
Client.prototype['staff'] = undefined;

/**
 * @member {Array.<module:model/Group>} groups
 */
Client.prototype['groups'] = undefined;

/**
 * @member {Boolean} accountNumberRequiresAutoGeneration
 */
Client.prototype['accountNumberRequiresAutoGeneration'] = undefined;

/**
 * @member {Date} closureDate
 */
Client.prototype['closureDate'] = undefined;

/**
 * @member {Date} withdrawalDate
 */
Client.prototype['withdrawalDate'] = undefined;

/**
 * @member {Date} submittedOnDate
 */
Client.prototype['submittedOnDate'] = undefined;

/**
 * @member {Number} legalForm
 */
Client.prototype['legalForm'] = undefined;

/**
 * @member {Date} reopenedDate
 */
Client.prototype['reopenedDate'] = undefined;

/**
 * @member {Date} proposedTransferDate
 */
Client.prototype['proposedTransferDate'] = undefined;

/**
 * @member {Boolean} rejected
 */
Client.prototype['rejected'] = undefined;

/**
 * @member {Boolean} pending
 */
Client.prototype['pending'] = undefined;

/**
 * @member {Boolean} notActive
 */
Client.prototype['notActive'] = undefined;

/**
 * @member {Boolean} transferInProgress
 */
Client.prototype['transferInProgress'] = undefined;

/**
 * @member {Boolean} transferOnHold
 */
Client.prototype['transferOnHold'] = undefined;

/**
 * @member {Boolean} notPending
 */
Client.prototype['notPending'] = undefined;

/**
 * @member {Date} activationLocalDate
 */
Client.prototype['activationLocalDate'] = undefined;

/**
 * @member {Boolean} transferInProgressOrOnHold
 */
Client.prototype['transferInProgressOrOnHold'] = undefined;

/**
 * @member {Date} officeJoiningLocalDate
 */
Client.prototype['officeJoiningLocalDate'] = undefined;

/**
 * @member {Boolean} withdrawn
 */
Client.prototype['withdrawn'] = undefined;

/**
 * @member {Boolean} notStaff
 */
Client.prototype['notStaff'] = undefined;

/**
 * @member {Date} rejectedDate
 */
Client.prototype['rejectedDate'] = undefined;

/**
 * @member {Boolean} closed
 */
Client.prototype['closed'] = undefined;

/**
 * @member {Boolean} active
 */
Client.prototype['active'] = undefined;

/**
 * @member {Boolean} new
 */
Client.prototype['new'] = undefined;






export default Client;

